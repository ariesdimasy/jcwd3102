import cron from "node-cron"

export const scheduleTask = () => {
    cron.schedule("* * * * *",() => {
        console.log("task running every minute")
    })
}