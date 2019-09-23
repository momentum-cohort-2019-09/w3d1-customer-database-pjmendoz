const capitalize = str => str[0].toUpperCase() + str.slice(1)

function customersToHtml (customer) {
    return `
    <div class = "customers">
        <img src= ${customer.picture.large}>
        <div class= "customer_name">${capitalize(customer.name.first)} ${capitalize(customer.name.last)}</div>  
        <div class="customer_email">${customer.email}</div>
        <ul class="locations">
            <li><span class="customer_location">${customer.location.street}</span></li>
            <li><span class="customer_location">${customer.location.city} ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</span>
        </ul>  
        <ul class="dates">
            <li><div class="customer_dob"><p>DOB:</p>${moment(customer.dob).format("MMM Do YYYY")}</div></li>
            <li><div class="customer_since"><p>Customer Since:</p>${moment(customer.registered).format("MMM Do YYYY")}</div></li>  
        </ul>
    </div>    
    `
}

document.querySelector('#customers').innerHTML = customers.map(customersToHtml).join('\n');