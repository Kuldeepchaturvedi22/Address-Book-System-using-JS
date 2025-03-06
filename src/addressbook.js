class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

let addressBook = [];
function validateContact(contact) {
    const nameRegex = /^[A-Z][a-z]{2,}/;
    const addressRegex = /^.{4,}/;
    const zipRegex = /^\d{5}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!nameRegex.test(contact.firstName) || !nameRegex.test(contact.lastName))
        return false;
    if (
        !addressRegex.test(contact.address) ||
        !addressRegex.test(contact.city) ||
        !addressRegex.test(contact.state)
    )
        return false;
    if (
        !zipRegex.test(contact.zip) ||
        !phoneRegex.test(contact.phone) ||
        !emailRegex.test(contact.email)
    )
        return false;
    return true;
}
function addContact(contact) {
    if (validateContact(contact)) {
        addressBook.push(contact);
    } else {
        console.error("Invalid Contact");
    }
}