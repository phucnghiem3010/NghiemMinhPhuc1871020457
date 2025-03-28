// Mock data for properties with enhanced image paths
const mockProperties = [
    {
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
        ],
        featured: true
    },
    {
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
        image: "//assets/images/noi-that-can-ho1.jpg",
        images: [
                "/assets/images/noi-that-can-ho2.jpg",
                "/assets/images/noi-that-can-ho3.jpg",
                "/assets/images/noi-that-can-ho4.jpg"
        ],
        featured: true
    },
    {
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
        ],
        featured: true
    },
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    },
];

// Enhanced mock API with better error handling and additional features
class MockAPI {
    constructor() {
        this.delay = 500; // Network delay in ms
        this.properties = [...mockProperties];
    }

    async call(url, method = 'GET', data = null) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let response;
                    
                    // Handle different endpoints
                    if (url === '/api/summary') {
                        response = this.getSummary();
                    } 
                    else if (url === '/api/properties' && method === 'GET') {
                        response = this.getProperties(url);
                    }
                    else if (url.startsWith('/api/properties/') && method === 'GET') {
                        response = this.getProperty(url);
                    }
                    else if (url === '/api/properties' && method === 'POST') {
                        response = this.addProperty(data);
                    }
                    else if (url.startsWith('/api/properties/') && method === 'PUT') {
                        response = this.updateProperty(url, data);
                    }
                    else if (url.startsWith('/api/properties/') && method === 'DELETE') {
                        response = this.deleteProperty(url);
                    }
                    else {
                        throw new Error('Endpoint not found');
                    }
                    
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            }, this.delay);
        });
    }

    getSummary() {
        return {
            totalProperties: this.properties.length,
            totalHouses: this.properties.filter(p => p.type === 'house').length,
            totalApartments: this.properties.filter(p => p.type === 'apartment').length,
            totalVillas: this.properties.filter(p => p.type === 'villa').length,
            totalOffices: this.properties.filter(p => p.type === 'office').length,
            totalUsers: 42,
            featuredProperties: this.properties.filter(p => p.featured).length
        };
    }

    getProperties(url) {
        const params = new URLSearchParams(url.split('?')[1] || '');
        const type = params.get('type');
        const location = params.get('location');
        const price = params.get('price');
        const bedrooms = params.get('bedrooms');
        const limit = parseInt(params.get('limit')) || 10;
        const page = parseInt(params.get('page')) || 1;
        const offset = parseInt(params.get('offset')) || 0;
        const featured = params.get('featured');
        const search = params.get('search');
        
        let filtered = [...this.properties];
        
        // Apply filters
        if (type && type !== 'all') {
            filtered = filtered.filter(p => p.type === type);
        }
        
        if (location && location !== 'all') {
            filtered = filtered.filter(p => 
                p.district.toLowerCase().includes(location.toLowerCase()) || 
                p.city.toLowerCase().includes(location.toLowerCase())
            );
        }
        
        if (price && price !== 'all') {
            const priceRanges = [
                { min: 0, max: 5000000 },
                { min: 5000000, max: 10000000 },
                { min: 10000000, max: 20000000 },
                { min: 20000000, max: 30000000 },
                { min: 30000000, max: Infinity }
            ];
            
            const range = priceRanges[parseInt(price) - 1];
            filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
        }
        
        if (bedrooms && bedrooms !== 'all') {
            filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms));
        }
        
        if (featured === 'true') {
            filtered = filtered.filter(p => p.featured);
        }
        
        if (search) {
            const searchTerm = search.toLowerCase();
            filtered = filtered.filter(p => 
                p.title.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm) ||
                p.address.toLowerCase().includes(searchTerm)
            );
        }
        
        // Pagination
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginated = filtered.slice(start, end);
        const totalPages = Math.ceil(filtered.length / limit);
        
        if (offset > 0) {
            return filtered.slice(offset, offset + limit);
        } else {
            return {
                properties: paginated,
                total: filtered.length,
                totalPages: totalPages,
                currentPage: page
            };
        }
    }

    getProperty(url) {
        const id = parseInt(url.split('/').pop());
        const property = this.properties.find(p => p.id === id);
        
        if (property) {
            return property;
        } else {
            throw new Error('Property not found');
        }
    }

    addProperty(property) {
        // Validate required fields
        if (!property.title || !property.type || !property.price) {
            throw new Error('Missing required fields');
        }

        const newId = Math.max(...this.properties.map(p => p.id), 0) + 1;
        const newProperty = { 
            ...property, 
            id: newId,
            status: property.status || 'available',
            featured: property.featured || false,
            images: property.images || [property.image],
            amenities: property.amenities || []
        };
        
        this.properties.push(newProperty);
        return newProperty;
    }

    updateProperty(url, data) {
        const id = parseInt(url.split('/').pop());
        const index = this.properties.findIndex(p => p.id === id);
        
        if (index !== -1) {
            this.properties[index] = { ...this.properties[index], ...data };
            return this.properties[index];
        } else {
            throw new Error('Property not found');
        }
    }

    deleteProperty(url) {
        const id = parseInt(url.split('/').pop());
        const index = this.properties.findIndex(p => p.id === id);
        
        if (index !== -1) {
            this.properties.splice(index, 1);
            return { success: true };
        } else {
            throw new Error('Property not found');
        }
    }
}

// Initialize the mock API
const mockAPI = new MockAPI();

// jQuery AJAX setup to use our mock API
$(document).ajaxSend(function(event, jqXHR, settings) {
    if (settings.url.startsWith('/api/')) {
        const method = settings.type;
        let data = null;
        
        if (settings.data) {
            if (settings.contentType === 'application/json') {
                data = JSON.parse(settings.data);
            } else if (typeof settings.data === 'string') {
                // Handle form data
                const params = new URLSearchParams(settings.data);
                data = Object.fromEntries(params.entries());
            } else {
                data = settings.data;
            }
        }
        
        mockAPI.call(settings.url, method, data)
            .then(response => {
                jqXHR.done(response);
            })
            .catch(error => {
                jqXHR.fail({ responseJSON: { message: error.message } });
            });
        
        return false;
    }
});

// For direct API calls (not through jQuery)
window.api = {
    getProperties: function(filters = {}) {
        const params = new URLSearchParams();
        
        for (const key in filters) {
            if (filters[key] !== undefined && filters[key] !== null) {
                params.append(key, filters[key]);
            }
        }
        
        return mockAPI.call(`/api/properties?${params.toString()}`);
    },
    
    getProperty: function(id) {
        return mockAPI.call(`/api/properties/${id}`);
    },
    
    addProperty: function(property) {
        return mockAPI.call('/api/properties', 'POST', property);
    },
    
    updateProperty: function(id, property) {
        return mockAPI.call(`/api/properties/${id}`, 'PUT', property);
    },
    
    deleteProperty: function(id) {
        return mockAPI.call(`/api/properties/${id}`, 'DELETE');
    },
    
    getSummary: function() {
        return mockAPI.call('/api/summary');
    },
    
    // New method for searching properties
    searchProperties: function(query) {
        return mockAPI.call(`/api/properties?search=${encodeURIComponent(query)}`);
    }
    
};
