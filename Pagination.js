
 /**
 * Pagination is common on news sites, e-commerce, and blogs. Write a function that
 * prints out the pagination text.
 */

function paginationText(pageNumber, pageSize, totalProducts) {

     var firstNumber = (pageSize * (pageNumber - 1));
     var display = totalProducts - firstNumber;
     var first = firstNumber + 1;
     var second = firstNumber + display;

     if ((pageNumber == 1) && (pageSize < totalProducts)) {
      second = pageSize;
    }
     return "Showing " + first + " to " + second + " of " + totalProducts + " Products.";
      console.log(str);
     

}


console.assert(paginationText(1, 10, 30) === 'Showing 1 to 10 of 30 Products.');
console.assert(paginationText(3, 10, 26) === 'Showing 21 to 26 of 26 Products.');
console.assert(paginationText(1, 10,  8) === 'Showing 1 to 8 of 8 Products.') ;


//
//jim code
//
function getTotalNumberOfPages(fullPages, remainder) {
  if(remainder) {
    return fullPages + 1;
  } else {
    return fullPages;
  }
}

function getUpperBound(pageNumber, pageSize, totalProducts, totalNumberOfPages) {
  if(pageNumber === totalNumberOfPages) {
    return totalProducts;
  } else {
    return pageNumber * pageSize;
  }
}

function paginationText(pageNumber, pageSize, totalProducts) {
  var remainder = totalProducts % pageSize;
  var fullPages = (totalProducts - remainder) / pageSize;
  var lowerBound = ((pageNumber-1) * pageSize)+1;
  var totalNumberOfPages = getTotalNumberOfPages(fullPages, remainder);
  var upperBound = getUpperBound(pageNumber, pageSize, totalProducts, totalNumberOfPages);
  
  return 'Showing ' + lowerBound + ' to ' + upperBound + ' of ' + totalProducts + ' Products.'; 

}



