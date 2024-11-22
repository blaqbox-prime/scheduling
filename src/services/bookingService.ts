const scheduleBookingReminder = async (date: Date) => {
    console.log(date);

    const CRON_KEY: string = 'QTlnZIAzFv8RZR6RwlBs+RITEGkhzxKqUZRyme6dRGI='
    const ENDPOINT: string = 'https://api.cron-job.org/jobs'
    const HEADERS = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CRON_KEY}`
    }

    const BASE_URL = "https://scheduling-5tu1.vercel.app"
    // Calculate the time 10 minutes from now 
    const currentTime = new Date(); 
    const runTime = new Date(currentTime.getTime() + 2 * 60000).toISOString();
    
    const JOB = {
        name: "Booking Reminder",
        url: `${BASE_URL}/sendReminder`,
        enabled: true,
        saveResponses: true,
        schedule: {
            type: 'once',
            time: runTime
        },
         
    }

    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(JOB)
    })

    if (response.ok) {
        console.log('Job Scheduled')
    }
    else {
        console.log('Job Failed');
        console.log(response)
    }

}


export {
    scheduleBookingReminder
}