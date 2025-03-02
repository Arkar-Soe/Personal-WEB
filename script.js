document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const container = document.querySelector('.container');

    console.log("sidebar:", sidebar); // ADDED
    console.log("sidebarToggle:", sidebarToggle); // ADDED
    console.log("container:", container); // ADDED

    if (sidebarToggle) { // ADDED - Check if sidebarToggle exists
        sidebarToggle.addEventListener('click', function() {
            console.log("Sidebar toggle clicked!"); // ADDED
            sidebar.classList.toggle('open');
            container.classList.toggle('open');
        });
    } else {
        console.error("Sidebar toggle element not found!"); // ADDED
    }

    // Tab functionality
    const tabs = document.querySelectorAll('.sidebar nav ul li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and tab contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            // Close sidebar after selecting a tab (on mobile)
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                container.classList.remove('open');
            }
        });
    });

    // Lights
    const livingRoomLights = document.getElementById('livingRoomLights');
    const kitchenLights = document.getElementById('kitchenLights');

    livingRoomLights.addEventListener('change', function() {
        console.log('Living room lights toggled: ' + this.checked);
        // Add logic to control lights here (e.g., send request to a smart home API)
    });

    kitchenLights.addEventListener('change', function() {
        console.log('Kitchen lights toggled: ' + this.checked);
        // Add logic to control lights here
    });

    // Temperature
    const tempControl = document.getElementById('tempControl');
    const currentTempDisplay = document.getElementById('currentTemp');

    tempControl.addEventListener('input', function() {
        // Smooth transition using CSS
        currentTempDisplay.style.transition = 'all 0.3s ease'; // Add transition
        currentTempDisplay.textContent = this.value + '°C';
        console.log('Temperature set to: ' + this.value + '°C');
    });

    // Remove transition after it's done to avoid conflicts
    currentTempDisplay.addEventListener('transitionend', function() {
        currentTempDisplay.style.transition = 'none';
    });

    // Security
    const toggleLock = document.getElementById('toggleLock');
    const frontDoorStatus = document.getElementById('frontDoorStatus');
    let isLocked = true;

    toggleLock.addEventListener('click', function() {
        isLocked = !isLocked;
        frontDoorStatus.textContent = isLocked ? 'Locked' : 'Unlocked';
        toggleLock.textContent = isLocked ? 'Unlock' : 'Lock';
        console.log('Front door is now: ' + (isLocked ? 'locked' : 'unlocked'));
        // Add logic to control door lock here
    });

    // Set "Home" tab as default active tab
    document.querySelector('.sidebar nav ul li[data-tab="home"]').classList.add('active');
    document.getElementById('home').classList.add('active');
});