/* globals module */

"use strict";

function solve(){
    
    
    function findProduct(product,arr){
        for(let i= 0, len = arr.length; i < len; i += 1){
            let index;
            if(arr[i].name === product.name && arr[i].productType === product.productType && arr[i].price === product.price){
                let index = i;
                return index;
            }
           
        }
         return false;
}

    class Product{
        constructor(productType, name, price){
            this._productType = productType;
            this._name = name;
            this._price = price;
        }
        get productType(){
            return this._productType;
        }
        set productType(value){
            if(typeof value !== 'string'){
                throw 'productType should be a string!';
            }
            this._productType = value;
        }
        get name(){
            return this._name;
        }
        set name(value){
            if(typeof value !== 'string'){
                throw 'name should be a string!';
            }
            this._name = value;
        }
        get price(){
            return this._price;
        }
        set price(value){
            if(typeof value !== 'number'){
                throw 'price should be a number!';
            }
            this._price = value;
        }
    }

    class ShoppingCart {
        constructor(){
            this._products = [];
        }
        get products(){
            return this._products;
        }        
        add(product){
            if(Array.isArray(product[0])) {
				product = product[0];
			}
            if(!(product instanceof Product)){
                throw 'Must add only products!';
            }
            this._products.push(product);

            return this;
        }

        remove(product){
            if(this._products.length === 0){
                throw 'there are no products in the ShoppingCart!';
            }
            let index = findProduct(product, this._products) 
            if(typeof index !== 'number'){
               console.log(index);
                throw 'the ShoppingCart does not contain this product';
            }else{
                   this._products.splice(index, 1);
            }
            
        }

        showCost(){
            if(this._products.length === 0){
                return 0;
            }
            let sum = 0;
            for(let product of this._products){
                sum += +product.price;
            }
            return sum;
        }
        showProductTypes(){
            if( this._products.length === 0){
                return [];
            }
            let uniq = {};
			this._products.forEach(x => uniq[x._productType] = true);
			return Object.keys(uniq).sort();
        }

        getInfo(){
            if(this._products.length === 0){
                return {totalPrice: 0,
                        products: []};
            }
           let products = [];
            let uniq = {};
            for(let product of this._products){
                let index = products.indexOf(product);
                if(!index){
                 uniq['name'] = product.name;
                uniq['totalPrice'] = product.price;
                uniq['quantity'] = 1;
                products.push(uniq);
                uniq = {};        
             }
            
                    products[index]['totalPrice'] += product.price;
                    products[index]['quantity'] += 1;    
        }
        
        let totalPrice = 0
        for(p of products){
            totalPrice += p.totalPrice;
        }
        return {
            totalPrice : totalPrice,
            products : products
            
        }
    }
    }
    return {
        Product, ShoppingCart
    };
}

module.exports = solve;