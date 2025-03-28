$(document).ready(function() {
    // Tab switching
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const target = $(this).data('target');
        
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        $('#dashboardContent, #propertiesContent, #addPropertyContent').addClass('d-none');
        $(`#${target}Content`).removeClass('d-none');
        
        if (target === 'properties') {
            loadProperties();
        } else if (target === 'dashboard') {
            loadDashboardData();
        }
    });
    
    // Load dashboard data on page load
    loadDashboardData();
    
    // Add new property button
    $('#addNewPropertyBtn').on('click', function() {
        $('#propertiesContent').addClass('d-none');
        $('#addPropertyContent').removeClass('d-none');
        $('#propertyFormTitle').text('Thêm bất động sản mới');
        resetPropertyForm();
    });
    
    // Back to properties list
    $('#backToPropertiesBtn').on('click', function() {
        $('#addPropertyContent').addClass('d-none');
        $('#propertiesContent').removeClass('d-none');
    });
    
    // Property form submission
    $('#propertyForm').on('submit', function(e) {
        e.preventDefault();
        saveProperty();
    });
    
    // Reset form
    $('#resetFormBtn').on('click', function() {
        resetPropertyForm();
    });
    
    // Image preview for main image
    $('#propertyMainImage').on('change', function() {
        previewImage(this, '#imagePreview', true);
    });
    
    // Image preview for multiple images
    $('#propertyImages').on('change', function() {
        previewImage(this, '#imagePreview', false);
    });
    
    // Delete property confirmation
    $('#confirmDeleteBtn').on('click', function() {
        const propertyId = $('#deletePropertyId').val();
        deleteProperty(propertyId);
    });
});

function loadDashboardData() {
    // Load summary data
    api.getSummary()
        .then(data => {
            $('#totalProperties').text(data.totalProperties);
            $('#totalHouses').text(data.totalHouses);
            $('#totalOffices').text(data.totalOffices);
            $('#totalUsers').text(data.totalUsers);
            
            // Create charts
            createPropertyChart();
            createPropertyTypeChart(data);
        });
    
    // Load recent properties
    api.getProperties({ limit: 5 })
        .then(data => {
            const properties = data.properties;
            const rows = properties.map(property => `
                <tr>
                    <td>${property.id}</td>
                    <td><img src="${property.image}" class="property-thumb" alt="${property.title}"></td>
                    <td>${property.title}</td>
                    <td><span class="badge bg-${getPropertyBadgeColor(property.type)}">${getPropertyTypeName(property.type)}</span></td>
                    <td>${property.price.toLocaleString()} VNĐ</td>
                    <td>${property.district}</td>
                    <td><span class="badge bg-${getStatusBadgeClass(property.status)}">${getStatusText(property.status)}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary me-1 edit-property" data-id="${property.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger delete-property" data-id="${property.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
            
            $('#recentProperties').html(rows);
            
            // Add click events
            $('.edit-property').on('click', function() {
                const propertyId = $(this).data('id');
                editProperty(propertyId);
            });
            
            $('.delete-property').on('click', function() {
                const propertyId = $(this).data('id');
                $('#deletePropertyId').val(propertyId);
                $('#deleteModal').modal('show');
            });
        });
}

function createPropertyChart() {
    const ctx = document.getElementById('propertyChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
            datasets: [{
                label: 'Bất động sản mới',
                data: [12, 19, 15, 27, 34, 42],
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderColor: 'rgba(13, 110, 253, 1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createPropertyTypeChart(data) {
    const ctx = document.getElementById('propertyTypeChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Nhà ở', 'Căn hộ', 'Biệt thự', 'Văn phòng'],
            datasets: [{
                data: [data.totalHouses, data.totalApartments, data.totalVillas, data.totalOffices],
                backgroundColor: [
                    'rgba(25, 135, 84, 0.8)',
                    'rgba(13, 202, 240, 0.8)',
                    'rgba(255, 193, 7, 0.8)',
                    'rgba(13, 110, 253, 0.8)'
                ],
                borderColor: [
                    'rgba(25, 135, 84, 1)',
                    'rgba(13, 202, 240, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(13, 110, 253, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

function loadProperties(page = 1) {
    api.getProperties({ page: page })
        .then(data => {
            const { properties, totalPages } = data;
            
            const rows = properties.map(property => `
                <tr>
                    <td>${property.id}</td>
                    <td><img src="${property.image}" class="property-thumb" alt="${property.title}"></td>
                    <td>${property.title}</td>
                    <td><span class="badge bg-${getPropertyBadgeColor(property.type)}">${getPropertyTypeName(property.type)}</span></td>
                    <td>${property.price.toLocaleString()} VNĐ</td>
                    <td>${property.district}</td>
                    <td><span class="badge bg-${getStatusBadgeClass(property.status)}">${getStatusText(property.status)}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary me-1 edit-property" data-id="${property.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger delete-property" data-id="${property.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
            
            $('#allProperties').html(rows);
            
            // Generate pagination
            let pagination = '';
            for (let i = 1; i <= totalPages; i++) {
                pagination += `
                    <li class="page-item ${i === page ? 'active' : ''}">
                        <a class="page-link" href="#" data-page="${i}">${i}</a>
                    </li>
                `;
            }
            
            $('#propertyPagination').html(pagination);
            
            // Add click events
            $('.edit-property').on('click', function() {
                const propertyId = $(this).data('id');
                editProperty(propertyId);
            });
            
            $('.delete-property').on('click', function() {
                const propertyId = $(this).data('id');
                $('#deletePropertyId').val(propertyId);
                $('#deleteModal').modal('show');
            });
            
            $('.page-link').on('click', function(e) {
                e.preventDefault();
                const page = $(this).data('page');
                loadProperties(page);
            });
        });
}

function getPropertyBadgeColor(type) {
    switch(type) {
        case 'house': return 'success';
        case 'apartment': return 'info';
        case 'villa': return 'warning';
        case 'office': return 'primary';
        default: return 'secondary';
    }
}

function getPropertyTypeName(type) {
    switch(type) {
        case 'house': return 'Nhà ở';
        case 'apartment': return 'Căn hộ';
        case 'villa': return 'Biệt thự';
        case 'office': return 'Văn phòng';
        default: return type;
    }
}

function getStatusBadgeClass(status) {
    switch(status) {
        case 'available': return 'success';
        case 'rented': return 'secondary';
        case 'maintenance': return 'warning';
        default: return 'primary';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'available': return 'Có sẵn';
        case 'rented': return 'Đã thuê';
        case 'maintenance': return 'Bảo trì';
        default: return status;
    }
}

function editProperty(id) {
    api.getProperty(id)
        .then(property => {
            $('#propertyFormTitle').text('Chỉnh sửa bất động sản');
            $('#propertyId').val(property.id);
            $('#propertyTitle').val(property.title);
            $('#propertyType').val(property.type);
            $('#propertyPrice').val(property.price);
            $('#propertyArea').val(property.area);
            $('#propertyBedrooms').val(property.bedrooms);
            $('#propertyBathrooms').val(property.bathrooms);
            $('#propertyAddress').val(property.address);
            $('#propertyDistrict').val(property.district);
            $('#propertyCity').val(property.city);
            $('#propertyStatus').val(property.status);
            $('#propertyDescription').val(property.description);
            $('#featuredProperty').prop('checked', property.featured || false);
            
            // Check amenities
            $('.form-check-input').prop('checked', false);
            property.amenities.forEach(amenity => {
                $(`#amenity${amenity.charAt(0).toUpperCase() + amenity.slice(1)}`).prop('checked', true);
            });
            
            // Show image previews
            $('#imagePreview').html(`
                <div class="col-md-3 mb-3">
                    <div class="card">
                        <img src="${property.image}" class="card-img-top" style="height: 100px; object-fit: cover;">
                        <div class="card-body p-2 text-center">
                            <small class="text-muted">Ảnh đại diện</small>
                        </div>
                    </div>
                </div>
                ${property.images.filter(img => img !== property.image).map((img, index) => `
                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img src="${img}" class="card-img-top" style="height: 100px; object-fit: cover;">
                            <div class="card-body p-2 text-center">
                                <small class="text-muted">Ảnh ${index + 1}</small>
                            </div>
                        </div>
                    </div>
                `).join('')}
            `);
            
            $('#propertiesContent').addClass('d-none');
            $('#addPropertyContent').removeClass('d-none');
        });
}

function resetPropertyForm() {
    $('#propertyForm')[0].reset();
    $('#propertyId').val('');
    $('#imagePreview').html('');
    $('.form-check-input').prop('checked', false);
    $('#featuredProperty').prop('checked', false);
}

function saveProperty() {
    const id = $('#propertyId').val();
    const property = {
        title: $('#propertyTitle').val(),
        type: $('#propertyType').val(),
        price: parseInt($('#propertyPrice').val()),
        area: parseInt($('#propertyArea').val()),
        bedrooms: parseInt($('#propertyBedrooms').val()) || 0,
        bathrooms: parseInt($('#propertyBathrooms').val()),
        address: $('#propertyAddress').val(),
        district: $('#propertyDistrict').val(),
        city: $('#propertyCity').val(),
        status: $('#propertyStatus').val(),
        description: $('#propertyDescription').val(),
        featured: $('#featuredProperty').is(':checked'),
        amenities: []
    };
    
    // Get selected amenities
    $('.form-check-input:checked').each(function() {
        property.amenities.push($(this).val());
    });
    
    // Determine if this is an add or update
    const isUpdate = id !== '';
    
    // In a real app, you would upload images here
    if (!isUpdate) {
        // For demo, use a random image from our mock data
        const randomImages = [
            'anh1.jpg',
            'anh2.jpg',
            'anh3.jpg',
            'anh4.jpg',
            'anh5.jpg'
        ];
        property.image = randomImages[Math.floor(Math.random() * randomImages.length)];
        property.images = [property.image];
    }
    
    const apiCall = isUpdate 
        ? api.updateProperty(id, property) 
        : api.addProperty(property);
    
    apiCall
        .then(() => {
            alert(isUpdate ? 'Cập nhật thành công!' : 'Thêm mới thành công!');
            
            if (isUpdate) {
                // Go back to properties list
                $('#addPropertyContent').addClass('d-none');
                $('#propertiesContent').removeClass('d-none');
                loadProperties();
            } else {
                // Reset form for new entry
                resetPropertyForm();
            }
            
            // Reload dashboard data
            loadDashboardData();
        })
        .catch(error => {
            alert('Đã xảy ra lỗi! Vui lòng thử lại.');
            console.error(error);
        });
}

function previewImage(input, previewContainerId, isMainImage) {
    const previewContainer = $(previewContainerId);
    
    if (isMainImage) {
        previewContainer.html('');
    }
    
    if (input.files) {
        const files = isMainImage ? [input.files[0]] : Array.from(input.files).slice(0, 5);
        
        files.forEach((file, index) => {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const preview = `
                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img src="${e.target.result}" class="card-img-top" style="height: 100px; object-fit: cover;">
                            <div class="card-body p-2 text-center">
                                <small class="text-muted">${isMainImage ? 'Ảnh đại diện' : `Ảnh ${index + 1}`}</small>
                            </div>
                        </div>
                    </div>
                `;
                previewContainer.append(preview);
            };
            
            reader.readAsDataURL(file);
        });
    }
}

function deleteProperty(id) {
    api.deleteProperty(id)
        .then(() => {
            alert('Xóa thành công!');
            $('#deleteModal').modal('hide');
            loadProperties();
            loadDashboardData();
        })
        .catch(error => {
            alert('Đã xảy ra lỗi! Vui lòng thử lại.');
            console.error(error);
        });
}

