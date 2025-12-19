const citySelect = document.getElementById("city");
const vendorsSection = document.getElementById("vendors");

// Vendor data for different cities
const vendorsData = {
    "Jabalpur": [
        { name: "Greenhouse bakers", address: "Chetanya city, infront of chetanya city site office, tilheri", phone: "7771816616", area: "Bilhari / Tilhri" },
        { name: "Sanskardhani Stores", address: "Sankardhani Stores, Jalaram bapu nagar ke samne, Vijan Mahal ke pass, Tilhari", phone: "9407058088", area: "Bilhari/Tilhari" },
        { name: "Amit Arora", address: "Jagdambe Departmental Store, Chaggar farm rajul township Tilhari", phone: "7723844611", area: "Bilhari / Tilhri" },
        { name: "Chandramani Provision", address: "Rajul Township phase 2", phone: "96176 05148", area: "Bilhari / Tilhri" },
        { name: "Bhagwati Kirana & General Store", address: "In Front of Datta Township bilhari", phone: "9039549509", area: "Bilhari / Tilhri" },
        { name: "Diya Provision", address: "Rajul Township near bhagwati kirana", phone: "9981633914", area: "Bilhari / Tilhri" },
        { name: "Super Market", address: "Super Market Dolphin Restaurant ke baju me in front of anantara bilhari", phone: "7024998866", area: "Bilhari/Tilhari" },
        { name: "Mahavar Trader", address: "Gaur Nadi Road Ahead Of Over bridge Left turn road", phone: "9131771159", area: "Bilhari / Tilhri" },
        { name: "R S Daily Needs", address: "South Civil Line", phone: "7000156776", area: "Civil Lines" },
        { name: "CMM Shop", address: "Ridge Road", phone: "7566553071", area: "Civil Lines" },
        { name: "S Mart Store", address: "Dumna Mod K Pass Priydarshni Colony", phone: "9560611161", area: "Civil Lines" },
        { name: "Puneet Grover", address: "Amul Shop South Civil Lines Near Ridge Road", phone: "8770099785", area: "Civil Lines" },
        { name: "Anand Mahawar", address: "Keshri Kirana Sheela talkies compound", phone: "7898013423", area: "Civil Lines" },
        { name: "Bablu Eggs Center", address: "Ranjhi", phone: "9098902757", area: "Ranjhi" },
        { name: "Ravi Provisions", address: "Vehicle Mod Hanuman Mandir ke baju se main road Ranjhi", phone: "9424308639", area: "Ranjhi" },
        { name: "Kishor Bhatia", address: "Bhatia Egg Centre, Darshan Singh Tiraha, Ranjhi Bazar", phone: "9300758918", area: "Ranjhi" },
        { name: "K mart", address: "In front of Gabriel School", phone: "9131469683", area: "Ranjhi" },
        { name: "Surjeet Singh", address: "Bhatia Kirana Store, Near kumar store", phone: "9303332163", area: "Ranjhi" },
        { name: "Sourabh Punjabi", address: "54 Nanak Nagar Manegaon Near Sai Mandir jabalpur", phone: "9300338388", area: "Ranjhi" },
        { name: "Pariwar Daily Needs", address: "Rawan Park Ranjhi", phone: "9827284074", area: "Ranjhi" },
        { name: "Honey Poultry", address: "Ranjhi", phone: "9589980786", area: "Ranjhi" },
        { name: "Ashish Sabarwal", address: "Mohit Store Tulsi nagar ranjhi", phone: "7869007046", area: "Ranjhi" },
        { name: "Saini Pan Bhandar", address: "Saini Bakery, Champa Nagar shahji ke samne Manegaon Ranjhi", phone: "7580821084", area: "Ranjhi" },
        { name: "New Kumar Stores Pawan Daswal", address: "Near St. Joseph Convent School Ranjhi", phone: "8269999918", area: "Ranjhi" },
        { name: "Sardar Kirana Stores", address: "Sardar Kirana Stores Ranjhi Bazar", phone: "9300481766", area: "Ranjhi" },
        { name: "Khan Chicken Center", address: "Nagar nigam ke samne", phone: "8959444786", area: "Ranjhi" },
        { name: "Lucky Bakery", address: "Ranjhi", phone: "9131029021", area: "Ranjhi" },
        { name: "Bhatia Bakery", address: "Ranjhi", phone: "7828517131", area: "Ranjhi" },
        { name: "Burman Chicken Shop", address: "Champa Nagar", phone: "7477286182", area: "Ranjhi" },
        { name: "Rajendra Kirana Stores", address: "In Front of Big Bazar", phone: "8085774040", area: "Gwarighat" },
        { name: "Null A-1 Quality", address: "Ce-07 Sukh Sagar Vally Gwarighath Jabalpur", phone: "8823888838", area: "Gwarighat" },
        { name: "Subhansh Gupta", address: "Ground floor, UWO building Below naivedyam restaurant", phone: "8839643011", area: "Gwarighat" },
        { name: "S K Provision", address: "jai bhim nagar gwarighat", phone: "9770707111", area: "Gwarighat" },
        { name: "JJ KERALA STORE", address: "PP Colony, Near St. Aloysius HS School", phone: "9827442901", area: "Gwarighat" },
        { name: "Ratanchand Bhagwan das", address: "Poliphatar smart bazar ke pass", phone: "9424323355", area: "Gwarighat" },
        { name: "Niks Foods", address: "Shop No.1, Opposite Ayush Gallery, Home Science Road", phone: "7566786333", area: "Napier Town" },
        { name: "Vimal Paan", address: "Manegaon", phone: "7566553071", area: "Manegaon" },
        { name: "Ansh Bakery & Icecream Parlour", address: "Near Milestone Gym Shakti nagar", phone: "8889197799", area: "Madan Mahal" },
        { name: "Dheerendra Thakur", address: "Opp. Wine Shop Sanjeevni Nagar, Kachpura", phone: "8815183133", area: "Garha" },
        { name: "Rohit Kapoor", address: "Kapoor Stores", phone: "9424926900", area: "Khamariya" },
        { name: "Lakhera Kirana Stores", address: "Sonpur Road, Ghana", phone: "9301205991", area: "Khamariya" },
        { name: "Yusuf Shah", address: "Arhan Store Sonpur Chowk, Ghana", phone: "9755089292", area: "Khamariya" },
        { name: "Partho Datta", address: "Datta Poultry Farm Manegao Champa Nagar Near st xavior school", phone: "9301167572", area: "Khamariya" },
        { name: "Vipin Paan", address: "Central Bank ke Samne pipariya kundam Road", phone: "8989891768", area: "Khamariya" },
        { name: "David Chicken", address: "MPEB road Near HCL", phone: "9340677382", area: "Rampur" },
        { name: "Kamdhenu Stores", address: "Rampur Chowk", phone: "9300110392", area: "Rampur" },
        { name: "RAVI SHARMA", address: "993 NEAR GHADI CHOWK NEAR SURVEY OF INDIA", phone: "9420853835", area: "Vijay Nagar" },
        { name: "Mahendra kirana store", address: "Dutt Township Bilhari", phone: "9340238558", area: "Bilhari / Tilhri" }
    ],
    "Bhopal": [
        { name: "Lakeview Eggs Center", address: "Near Lake, MP Nagar", phone: "9876543211", area: "MP Nagar" },
        { name: "City Fresh Eggs", address: "New Market, Zone 1", phone: "9123456780", area: "New Market" }
    ],
    "Indore": [
        { name: "Malwa Poultry", address: "Vijay Nagar, Main Road", phone: "9876543212", area: "Vijay Nagar" },
        { name: "Rajwada Eggs", address: "Rajwada, Old City", phone: "9123456781", area: "Rajwada" }
    ],
    "Gwalior": [
        { name: "Gwalior Fresh Eggs", address: "City Center, Lashkar", phone: "9876543213", area: "Lashkar" }
    ],
    "Nagpur": [
        { name: "Orange City Eggs", address: "Sitabuldi, Main Market", phone: "9876543214", area: "Sitabuldi" },
        { name: "Nagpur Poultry", address: "Dharampeth, Near School", phone: "9123456782", area: "Dharampeth" }
    ]
};

citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    
    // Clear previous vendors
    vendorsSection.innerHTML = "";
    
    if (selectedCity && vendorsData[selectedCity]) {
        displayVendors(selectedCity);
    } else if (selectedCity) {
        displayNoVendors(selectedCity);
    }
});

function displayVendors(city) {
    const vendors = vendorsData[city];
    
    // Create vendors grid container
    const vendorsGrid = document.createElement("div");
    vendorsGrid.classList.add("vendors-grid");
    
    // Create vendor cards
    vendors.forEach((vendor, index) => {
        const card = document.createElement("div");
        card.classList.add("vendor-card");
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Create phone button HTML conditionally
        const phoneButton = vendor.phone ? 
            `<a class="call-btn" href="tel:${vendor.phone}">
                <i class="fas fa-phone-alt"></i> Call ${vendor.phone}
            </a>` : 
            `<div class="no-phone">Phone number not available</div>`;
        
        card.innerHTML = `
            <h3>${vendor.name}</h3>
            <div class="vendor-area">
                <i class="fas fa-map-pin"></i>
                <span>${vendor.area}</span>
            </div>
            <div class="vendor-address">
                <i class="fas fa-map-marker-alt"></i>
                <span>${vendor.address}</span>
            </div>
            ${phoneButton}
        `;
        
        vendorsGrid.appendChild(card);
    });
    
    vendorsSection.appendChild(vendorsGrid);
    
    // Add a nice title
    const title = document.createElement("h2");
    title.textContent = `The Hens Co. Vendors in ${city}`;
    title.style.textAlign = "center";
    title.style.marginBottom = "1.5rem";
    title.style.color = "var(--dark)";
    title.style.fontSize = "2rem";
    vendorsSection.prepend(title);
}

function displayNoVendors(city) {
    vendorsSection.innerHTML = `
        <div class="no-vendors">
            <i class="fas fa-egg"></i>
            <h3>No The Hens Co. vendors found in ${city} yet.</h3>
            <p>We're expanding! Check back soon or try another city.</p>
        </div>
    `;
}

// Add some interactive effects to the page
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to call buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('call-btn') || e.target.closest('.call-btn')) {
            const btn = e.target.classList.contains('call-btn') ? e.target : e.target.closest('.call-btn');
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
        }
    });
    
    // Add parallax effect to floating eggs
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const eggs = document.querySelectorAll('.egg');
        
        eggs.forEach((egg, index) => {
            const speed = 0.5 + (index * 0.1);
            egg.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});