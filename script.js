const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"]; // name of the guests that will be there 
guests.unshift("BRUTUS"); // Add his frined BRUTUS to the beginning of the list.
guests.push('AUGUSTUS','LUCIA'); // added them to the end of the list
const spartacusIndex = guests.indexOf("SPARTACUS"); // Index of the -1 and not found in the list and he was not invited 
const indexToRemove = guests.indexOf("CASSIUS"); // Index of CASSIUS to find it 
guests.splice(indexToRemove, 1); // since the CASSIUS index is 3 he  will be removed from the array list
const specialGuests = guests.slice(0, 3); //send a special invite to the first three guests on the list.
const honoredGuests = guests.slice(0, 2); // Extracts honored guests.
const otherGuests = guests.slice(2); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays.