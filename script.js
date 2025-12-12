// Initialize localStorage with sample data if empty
function initializeData() {
    if (!localStorage.getItem('journeys')) {
        const sampleJourneys = [
            {
                id: 1,
                name: 'Rajesh Kumar',
                contact: '+91 98765 43210',
                trainNumber: '12345',
                journeyDate: '2024-12-25',
                origin: 'New Delhi',
                destination: 'Mumbai Central',
                coachSeat: 'S3, Seat 45',
                notes: 'Traveling for business. Looking forward to meeting fellow travelers!',
                registeredAt: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Priya Sharma',
                contact: '+91 87654 32109',
                trainNumber: '12345',
                journeyDate: '2024-12-25',
                origin: 'New Delhi',
                destination: 'Mumbai Central',
                coachSeat: 'S5, Seat 12',
                notes: 'First time traveling alone. Would love to connect!',
                registeredAt: new Date().toISOString()
            },
            {
                id: 3,
                name: 'Amit Patel',
                contact: '+91 76543 21098',
                trainNumber: '67890',
                journeyDate: '2024-12-24',
                origin: 'Bangalore',
                destination: 'Chennai',
                coachSeat: 'A1, Seat 30',
                notes: 'Returning home after vacation.',
                registeredAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('journeys', JSON.stringify(sampleJourneys));
    }
}

// Get all journeys from localStorage
function getJourneys() {
    return JSON.parse(localStorage.getItem('journeys') || '[]');
}

// Save journeys to localStorage
function saveJourneys(journeys) {
    localStorage.setItem('journeys', JSON.stringify(journeys));
}

// Search for peers
function searchPeers(trainNumber, journeyDate, origin, destination) {
    const journeys = getJourneys();
    
    return journeys.filter(journey => {
        const matchesTrain = !trainNumber || journey.trainNumber.toLowerCase().includes(trainNumber.toLowerCase());
        const matchesDate = !journeyDate || journey.journeyDate === journeyDate;
        const matchesOrigin = !origin || journey.origin.toLowerCase().includes(origin.toLowerCase());
        const matchesDestination = !destination || journey.destination.toLowerCase().includes(destination.toLowerCase());
        
        return matchesTrain && matchesDate && matchesOrigin && matchesDestination;
    });
}

// Display search results
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    const resultsList = document.getElementById('resultsList');
    
    if (results.length === 0) {
        resultsList.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-lg">No peers found for this journey.</p>
                <p class="text-sm mt-2">Try adjusting your search criteria or register your own journey!</p>
            </div>
        `;
        resultsDiv.classList.remove('hidden');
        return;
    }
    
    resultsList.innerHTML = results.map(journey => `
        <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-r from-blue-50 to-cyan-50">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div class="flex-1">
                    <div class="flex items-center mb-3">
                        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            ${journey.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold text-gray-900">${escapeHtml(journey.name)}</h4>
                            <p class="text-sm text-gray-500">Train: ${escapeHtml(journey.trainNumber)}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
                        <div class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            ${formatDate(journey.journeyDate)}
                        </div>
                        <div class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            ${escapeHtml(journey.origin)} → ${escapeHtml(journey.destination)}
                        </div>
                        ${journey.coachSeat ? `
                        <div class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>
                            ${escapeHtml(journey.coachSeat)}
                        </div>
                        ` : ''}
                    </div>
                    ${journey.notes ? `
                    <div class="mt-4 p-3 bg-white rounded-lg border-l-4 border-blue-500">
                        <p class="text-sm text-gray-700">${escapeHtml(journey.notes)}</p>
                    </div>
                    ` : ''}
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                    <a href="tel:${journey.contact}" 
                       class="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Register new journey
function registerJourney(journeyData) {
    const journeys = getJourneys();
    const newId = journeys.length > 0 ? Math.max(...journeys.map(j => j.id)) + 1 : 1;
    
    const newJourney = {
        id: newId,
        ...journeyData,
        registeredAt: new Date().toISOString()
    };
    
    journeys.push(newJourney);
    saveJourneys(journeys);
    return newJourney;
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-IN', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Search form handler
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const trainNumber = document.getElementById('trainNumber').value.trim();
    const journeyDate = document.getElementById('journeyDate').value;
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();
    
    if (!trainNumber && !journeyDate && !origin && !destination) {
        alert('Please fill in at least one search criterion.');
        return;
    }
    
    const results = searchPeers(trainNumber, journeyDate, origin, destination);
    displayResults(results);
});

// Register form handler
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const journeyData = {
        name: document.getElementById('name').value.trim(),
        contact: document.getElementById('contact').value.trim(),
        trainNumber: document.getElementById('regTrainNumber').value.trim(),
        journeyDate: document.getElementById('regJourneyDate').value,
        origin: document.getElementById('regOrigin').value.trim(),
        destination: document.getElementById('regDestination').value.trim(),
        coachSeat: document.getElementById('coachSeat').value.trim() || '',
        notes: document.getElementById('notes').value.trim() || ''
    };
    
    // Basic validation
    if (!journeyData.name || !journeyData.contact || !journeyData.trainNumber || 
        !journeyData.journeyDate || !journeyData.origin || !journeyData.destination) {
        alert('Please fill in all required fields.');
        return;
    }
    
    registerJourney(journeyData);
    
    // Show success message
    const successDiv = document.getElementById('registerSuccess');
    successDiv.classList.remove('hidden');
    
    // Reset form
    this.reset();
    
    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successDiv.classList.add('hidden');
    }, 5000);
});

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('journeyDate').setAttribute('min', today);
document.getElementById('regJourneyDate').setAttribute('min', today);

// Initialize on page load
initializeData();

