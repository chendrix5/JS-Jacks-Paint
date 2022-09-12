function configureListeners() {
    let images = document.getElementsByTagName('img') 


     for (var i = 0; i < images.length; i++) {   
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
        price = '$19.99'
        colorName = 'Lime Green'          
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '12.99'
            colorName = 'medium Brown'
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = '$9.99'
            colorName = 'Solid White'
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = '$15.99'
            colorName = 'Solid Black'
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = '$8.99'
            colorName = ' Medium Blue'
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = '$16.99'
            colorName = 'Light Purple'
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = '$17.99'
            colorName = 'Bright Yellow'
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = // select element with corresponding id
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}
