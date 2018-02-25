export function getLastDateOfMonth(date) {
    return date.clone().endOf('month').date();
}