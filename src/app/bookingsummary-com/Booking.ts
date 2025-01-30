export class Booking {
    bookingId: number;
    email: String;
    noofTicket: number;
    from: String;
    to: String;
    totalFare: number;

    constructor(bi: number, e: string, nt: number, f: String, t: String, tf: number) {
        this.bookingId = bi;
        this.email = e;
        this.noofTicket = nt;
        this.from = f;
        this.to = t;
        this.totalFare = tf;
    }


}