$(document).ready(function() {
    // Load properties on page load
    loadFeaturedProperties();
    loadHouseProperties();
    loadOfficeProperties();
    
    // Search form submission
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();
        const type = $('#propertyType').val();
        const location = $('#location').val();
        const price = $('#priceRange').val();
        
        // In a real app, this would redirect to search results
        alert(`Đang tìm kiếm: Loại ${type}, Địa điểm ${location}, Giá ${price}`);
    });
    
    // Login button click
    $('#loginBtn').on('click', function() {
        $('#loginModal').modal('show');
    });

    // Login admin button click
    $('#loginAdminBtn').on('click', function() {
        $('#loginAdminModal').modal('show');
    });
    
    // Admin login form submission
    $('#loginAdminForm').on('submit', function(e) {
        e.preventDefault();
        const emailadmin = $('#loginAdminEmail').val("admin@happyhome.com");
        const passwordadmin = $('#loginAdminPassword').val("Admin123@");
        
        // Simulate login
        if (emailadmin && passwordadmin) {
            setTimeout(function() {
                alert('Đăng nhập thành công!');
                window.location.href = '/assets/admin/admin.html';
            }, 1000);
        }
    });

    // Login form submission
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        const email = $('#loginEmail').val("mailbeo@gmail.com");
        const password = $('#loginPassword').val("Meobeo123@");
        
        // Simulate login
        if (email && password) {
            setTimeout(function() {
                alert('Đăng nhập thành công!');
                $('#loginModal').modal('hide');
                $('#loginBtn').html('<i class="fas fa-user me-1"></i>Tài khoản');
            }, 1000);
        }
    });
    
    
    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
        $(this).trigger('reset');
    });
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });
});

function loadFeaturedProperties() {
    // In a real app, this would be an AJAX call
    const featuredProperties = [
        {
            id: 1,
            title: "Biệt thự cao cấp Quận 2",
            type: "villa",
            price: 35000000,
            district: "Quận 2",
            bedrooms: 4,
            bathrooms: 3,
            area: 200,
            image: "/assets/images/bietthu.jpg",
            featured: true
        },
        {
            id: 2,
            title: "Căn hộ trung tâm Quận 1",
            type: "apartment",
            price: 18000000,
            district: "Quận 1",
            bedrooms: 2,
            bathrooms: 2,
            area: 75,
            image: "/assets/images/canhotrungtam.jpg",
            featured: true
        },
        {
            id: 3,
            title: "Văn phòng Quận Bình Thạnh",
            type: "office",
            price: 25000000,
            district: "Bình Thạnh",
            bedrooms: 0,
            bathrooms: 2,
            area: 120,
            image: "/assets/images/vanphong.jpg",
            featured: true
        }
    ];
    
    displayProperties(featuredProperties, '#featuredPropertyList');
}

function loadHouseProperties() {
    const houseProperties = [
        {
            id: 4,
            title: "Nhà mặt tiền Quận 3",
            type: "house",
            price: 22000000,
            district: "Quận 3",
            bedrooms: 3,
            bathrooms: 2,
            area: 150,
            image: "/assets/images/nhamattien.jpg"
        },
        {
            id: 5,
            title: "Nhà phố Quận Tân Bình",
            type: "house",
            price: 15000000,
            district: "Tân Bình",
            bedrooms: 3,
            bathrooms: 2,
            area: 100,
            image: "/assets/images/nhapho-1.jpg"
        },
        {
            id: 6,
            title: "Nhà vườn Quận 9",
            type: "house",
            price: 12000000,
            district: "Quận 9",
            bedrooms: 4,
            bathrooms: 3,
            area: 180,
            image: "/assets/images/nhavuon.jpg"
        }
    ];
    
    displayProperties(houseProperties, '#housePropertyList');
}

function loadOfficeProperties() {
    const officeProperties = [
        {
            id: 7,
            title: "Văn phòng Quận 1",
            type: "office",
            price: 30000000,
            district: "Quận 1",
            bedrooms: 0,
            bathrooms: 3,
            area: 150,
            image: "/assets/images/vanphong2.jpg"
        },
        {
            id: 8,
            title: "Coworking space Quận 4",
            type: "office",
            price: 8000000,
            district: "Quận 4",
            bedrooms: 0,
            bathrooms: 2,
            area: 50,
            image: "/assets/images/coworking-space.jpg"
        },
        {
            id: 9,
            title: "Văn phòng chia sẻ Quận 7",
            type: "office",
            price: 12000000,
            district: "Quận 7",
            bedrooms: 0,
            bathrooms: 2,
            area: 80,
            image: "/assets/images/van-phong-cong-ty.jpg"
        }
    ];
    
    displayProperties(officeProperties, '#officePropertyList');
}

function displayProperties(properties, container) {
    let html = '';
    
    properties.forEach(property => {
        html += `
            <div class="col-lg-4 col-md-6">
                <div class="card property-card h-100">
                    <img src="${property.image}" class="card-img-top" alt="${property.title}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="badge bg-${getPropertyBadgeColor(property.type)}">
                                ${getPropertyTypeName(property.type)}
                            </span>
                            <span class="price">${property.price.toLocaleString()} VNĐ/tháng</span>
                        </div>
                        <h5 class="card-title">${property.title}</h5>
                        <p class="card-text location mb-3">
                            <i class="fas fa-map-marker-alt text-primary"></i> ${property.district}
                        </p>
                        <div class="features mb-3">
                            <span><i class="fas fa-vector-square"></i> ${property.area} m²</span>
                            <span><i class="fas fa-bed"></i> ${property.bedrooms} PN</span>
                            <span><i class="fas fa-bath"></i> ${property.bathrooms} PT</span>
                        </div>
                        <button class="btn btn-outline-primary w-100 view-detail" data-id="${property.id}">
                            <i class="fas fa-search me-2"></i>Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    $(container).html(html);
    
    // Add click event for detail buttons
    $('.view-detail').on('click', function() {
        const propertyId = $(this).data('id');
        showPropertyDetail(propertyId);
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

function showPropertyDetail(id) {
    // In a real app, this would be an AJAX call
    const propertyDetails = {
        1: {
            id: 1,
            title: "Biệt thự cao cấp Quận 2",
            type: "villa",
            price: 35000000,
            address: "123 Đường Nguyễn Văn Linh",
            district: "Quận 2",
            city: "TP.HCM",
            bedrooms: 4,
            bathrooms: 3,
            area: 200,
            status: "available",
            description: "Biệt thự cao cấp mới xây, nội thất sang trọng, hồ bơi riêng, an ninh 24/7. Vị trí đắc địa gần trung tâm thương mại và trường học quốc tế.",
            amenities: ["wifi", "air-conditioner", "television", "kitchen", "pool", "gym", "parking"],
            image: "/assets/images/noi-that-biet-thu1.jpg",
            images: [
                "/assets/images/noi-that-biet-thu2.jpg",
                "/assets/images/noi-that-biet-thu3.jpg",
                "/assets/images/noi-that-biet-thu4.jpg"
            ]
        },
        2: {
            id: 2,
            title: "Căn hộ trung tâm Quận 1",
            type: "apartment",
            price: 18000000,
            address: "456 Đường Lê Lợi",
            district: "Quận 1",
            city: "TP.HCM",
            bedrooms: 2,
            bathrooms: 2,
            area: 75,
            status: "available",
            description: "Căn hộ cao cấp full nội thất, view thành phố, tiện ích đầy đủ: hồ bơi, gym, khu vui chơi trẻ em. Thuận tiện di chuyển đến các quận trung tâm.",
            amenities: ["wifi", "air-conditioner", "television", "kitchen", "gym", "parking"],
            image: "/assets/images/noi-that-can-ho1.jpg",
            images: [
                "/assets/images/noi-that-can-ho2.jpg",
                "/assets/images/noi-that-can-ho3.jpg",
                "/assets/images/noi-that-can-ho4.jpg"
            ]
        },
        3: {
            id: 3,
            title: "Văn phòng Quận Bình Thạnh",
            type: "office",
            price: 25000000,
            address: "789 Đường Xô Viết Nghệ Tĩnh",
            district: "Bình Thạnh",
            city: "TP.HCM",
            bedrooms: 0,
            bathrooms: 2,
            area: 120,
            status: "available",
            description: "Văn phòng hiện đại, thiết kế mở, đầy đủ tiện nghi: internet tốc độ cao, phòng họp, khu vực tiếp khách. Vị trí thuận lợi gần các trục đường chính.",
            amenities: ["wifi", "air-conditioner", "parking", "conference-room"],
            image: "/assets/images/van-phong-binh-thach1.jpg",
            images: [
                "/assets/images/van-phong-binh-thach2.jpg",
                "/assets/images/van-phong-binh-thach3.jpg"
            ]
        },
        4: {
            id: 4,
            title: "Nhà mặt tiền Quận 3",
            type: "house",
            price: 22000000,
            address: "321 Đường Võ Văn Tần",
            district: "Quận 3",
            city: "TP.HCM",
            bedrooms: 3,
            bathrooms: 2,
            area: 150,
            status: "available",
            description: "Nhà mặt tiền kinh doanh, vị trí đắc địa, thiết kế hiện đại, phù hợp hộ gia đình hoặc kinh doanh. Diện tích sử dụng rộng rãi, thoáng mát.",
            amenities: ["wifi", "air-conditioner", "television", "kitchen", "parking"],
            image: "/assets/images/nha-mat-tien1.jpg",
            images: [
                "/assets/images/nha-mat-tien2.jpg",
                "/assets/images/nha-mat-tien3.jpg"
            ]
        },
        5: {
            id: 5,
            title: "Nhà phố Quận Tân Bình",
            type: "house",
            price: 15000000,
            address: "654 Đường Cộng Hòa",
            district: "Tân Bình",
            city: "TP.HCM",
            bedrooms: 3,
            bathrooms: 2,
            area: 100,
            status: "available",
            description: "Nhà phố mới xây, nội thất cao cấp, khu dân cư an ninh, tiện ích xung quanh đầy đủ. Gần sân bay Tân Sơn Nhất, thuận tiện đi lại.",
            amenities: ["wifi", "air-conditioner", "television", "kitchen"],
            image: "/assets/images/noi-that-nha-pho1.jpg",
            images: [
                "/assets/images/noi-that-nha-pho2.jpg",
                "/assets/images/noi-that-nha-pho3.jpg"
            ]
        },
        6: {
            id: 6,
            title: "Nhà vườn Quận 9",
            type: "house",
            price: 12000000,
            address: "987 Đường Lê Văn Việt",
            district: "Quận 9",
            city: "TP.HCM",
            bedrooms: 4,
            bathrooms: 3,
            area: 180,
            status: "available",
            description: "Nhà vườn yên tĩnh, không gian xanh mát, phù hợp gia đình đa thế hệ. Sân vườn rộng, có thể trồng rau, cây cảnh theo sở thích.",
            amenities: ["wifi", "air-conditioner", "television", "kitchen", "garden"],
            image: "/assets/images/noi-that-nha-vuon1.jpg",
            images: [
                "/assets/images/noi-that-nha-vuon2.jpg",
                "/assets/images/noi-that-nha-vuon3.jpg"
            ]
        },
        7: {
            id: 7,
            title: "Văn phòng Quận 1",
            type: "office",
            price: 30000000,
            address: "159 Đường Nguyễn Huệ",
            district: "Quận 1",
            city: "TP.HCM",
            bedrooms: 0,
            bathrooms: 3,
            area: 150,
            status: "available",
            description: "Văn phòng hạng A tại trung tâm quận 1, view đẹp, nội thất cao cấp, đầy đủ tiện nghi. Phù hợp công ty nước ngoài, doanh nghiệp lớn.",
            amenities: ["wifi", "air-conditioner", "parking", "conference-room", "reception"],
            image: "/assets/images/van-phong-quan1.jpg",
            images: [
                "/assets/images/van-phong-quan1-2.jpg",
                "/assets/images/van-phong-quan1-3.jpg"
            ]
        },
        8: {
            id: 8,
            title: "Coworking space Quận 4",
            type: "office",
            price: 8000000,
            address: "753 Đường Tôn Đản",
            district: "Quận 4",
            city: "TP.HCM",
            bedrooms: 0,
            bathrooms: 2,
            area: 50,
            status: "available",
            description: "Không gian làm việc chung hiện đại, cộng đồng startup năng động. Bao gồm bàn làm việc, phòng họp nhỏ, internet tốc độ cao, cafe miễn phí.",
            amenities: ["wifi", "air-conditioner", "parking", "coffee", "printer"],
            image: "/assets/images/han-spaces-coworking1.jpg",
            images: [
                "/assets/images/han-spaces-coworking2.jpg",
                "/assets/images/han-spaces-coworking3.jpg"
            ]
        },
        9: {
            id: 9,
            title: "Văn phòng chia sẻ Quận 7",
            type: "office",
            price: 12000000,
            address: "456 Đường Nguyễn Thị Thập",
            district: "Quận 7",
            city: "TP.HCM",
            bedrooms: 0,
            bathrooms: 2,
            area: 80,
            status: "available",
            description: "Văn phòng chia sẻ thiết kế hiện đại, đầy đủ tiện nghi, phù hợp nhóm làm việc 5-10 người. Khu vực tiếp khách riêng, view đẹp.",
            amenities: ["wifi", "air-conditioner", "parking", "reception"],
            image: "/assets/images/van-phong-q7.jpg",
            images: [
                "/assets/images/van-phong-q7-1.jpg",
                "/assets/images/van-phong-q7-2.jpg"
            ]
        }
    };
    
    const property = propertyDetails[id];
    
    if (property) {
        $('#propertyModalTitle').text(property.title);
        
        const content = `
            <div class="row">
                <div class="col-lg-6">
                    <div class="sticky-top" style="top: 20px;">
                        <div id="propertyCarousel" class="carousel slide mb-3" data-bs-ride="carousel">
                            <div class="carousel-inner rounded">
                                ${property.images.map((img, index) => `
                                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                        <img src="${img}" class="d-block w-100" alt="Property image ${index + 1}" style="height: 300px; object-fit: cover;">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="row g-2">
                            ${property.images.map((img, index) => `
                                <div class="col-3">
                                    <img src="${img}" class="img-thumbnail ${index === 0 ? 'active-thumb' : ''}" 
                                         style="height: 70px; width: 100%; object-fit: cover; cursor: pointer;"
                                         onclick="$('#propertyCarousel').carousel(${index})">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="text-primary mb-3">${property.price.toLocaleString()} VNĐ/tháng</h3>
                    <p class="text-muted mb-4">
                        <i class="fas fa-map-marker-alt text-primary"></i> 
                        ${property.address}, ${property.district}, ${property.city}
                    </p>
                    
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <span class="badge bg-light text-dark py-2 px-3">
                            <i class="fas fa-vector-square text-primary me-1"></i> ${property.area} m²
                        </span>
                        ${property.bedrooms > 0 ? `
                            <span class="badge bg-light text-dark py-2 px-3">
                                <i class="fas fa-bed text-primary me-1"></i> ${property.bedrooms} PN
                            </span>
                        ` : ''}
                        <span class="badge bg-light text-dark py-2 px-3">
                            <i class="fas fa-bath text-primary me-1"></i> ${property.bathrooms} PT
                        </span>
                        <span class="badge bg-light text-dark py-2 px-3">
                            <i class="fas fa-home text-primary me-1"></i> ${getPropertyTypeName(property.type)}
                        </span>
                        <span class="badge bg-${getStatusBadgeClass(property.status)} py-2 px-3">
                            ${getStatusText(property.status)}
                        </span>
                    </div>
                    
                    <h5 class="mt-4 mb-3">Mô tả</h5>
                    <p class="mb-4">${property.description}</p>
                    
                    <h5 class="mt-4 mb-3">Tiện ích</h5>
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        ${property.amenities.map(amenity => `
                            <span class="badge bg-light text-dark py-2 px-3">
                                <i class="fas fa-check-circle text-primary me-1"></i> ${getAmenityName(amenity)}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        $('#propertyModalBody').html(content);
        $('#propertyModal').modal('show');
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

function getAmenityName(amenity) {
    switch(amenity) {
        case 'wifi': return 'Wifi';
        case 'air-conditioner': return 'Điều hòa';
        case 'television': return 'TV';
        case 'kitchen': return 'Bếp';
        case 'pool': return 'Hồ bơi';
        case 'gym': return 'Phòng gym';
        case 'parking': return 'Chỗ đỗ xe';
        case 'garden': return 'Vườn';
        case 'conference-room': return 'Phòng họp';
        case 'reception': return 'Lễ tân';
        case 'coffee': return 'Cafe miễn phí';
        case 'printer': return 'Máy in';
        default: return amenity;
    }
}