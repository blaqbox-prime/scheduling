const scheduleBookingReminder = async (date: Date) => {
    console.log(date);

    const CRON_KEY: string = 'QTlnZIAzFv8RZR6RwlBs+RITEGkhzxKqUZRyme6dRGI='
    const ENDPOINT: string = 'https://api.cron-job.org/jobs'
    const HEADERS = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CRON_KEY}`
    }

    // Calculate the time 10 minutes from now 
    const currentTime = new Date(); 
    const runTime = new Date(currentTime.getTime() + 2 * 60000).toISOString();
    
    const JOB = {
        name: "Booking Reminder",
        url: 'http://localhost:3000/api/sendReminder',
        enabled: true,
        saveResponses: true,
        schedule: {
            type: 'once',
            time: runTime
        },
         
    }

    const response = await fetch(ENDPOINT, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify(JOB)
    })

    if (response.ok) {
        console.log('Job Scheduled')
    }
    else {
        const data = await response.json();
        console.log(data);
    }

}


export {
    scheduleBookingReminder
}