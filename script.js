const capitalize = str => str[0].toUpperCase() + str.slice(1)

function customersToHtml (customer) {
    return `
    <div class = "customers">
        <img src= ${customer.picture.medium}>
        <div class= "customer_name">${customer.name.first} ${customer.name.last}</div>  
        <div class="customer_email">${customer.email}</div>
        <div class="locations">
            <span class="customer_location">${customer.location.street}</span>
            <span class="customer_location">${customer.location.city}</span>
            <span class="customer_location">${customer.location.state}</span>
            <span class="customer_location">${customer.location.postcode}</span>

        </div>    
    </div>    
    `
}

document.querySelector('#customers').innerHTML = customers.map(customersToHtml).join('\n');