// {
//   "name": "Best of Paris in 7 Days Tour",
//   "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
//   "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
//   "price": "1,995"
// }

let tours = []

let nextId = 1;

function getAll() {
    return tours;
}

function addOne(name , info, image, price ) {
    // Check if any parameter is empty or undefined
    if (!name || !info || !image || price == undefined) {
        return false;
    }

    const newTour = {
        id: nextId++,
        name,
        info,
        image,
        price
    };

    tours.push(newTour);
    return newTour;
}

function findById(id) {
    const numericId = Number(id);
    const tour = tours.find(item => item.id === numericId);
    if (tour) {
        return tour;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData) {
    const tour = findById(id);
    if (tour) {
        // Update properties only if provided in updatedData
        if (updatedData.name) {
            tour.name = updatedData.name;
        }
        if (updatedData.info !== undefined) {
            tour.info = updatedData.info;
        }
        if (updatedData.images !== undefined) {
            tour.images = updatedData.images;
        }
        if (updatedData.price !== undefined){
            tour.price = updatedData.price;
        }
        return tour;
    }
    return false;
}

function deleteOneById(id) {
    const tour = findById(id);
    if (tour) {
        const initialLength = tours.length;
        tours = tours.filter(tour => tour.id !== Number(id));
        return tours.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
}

if (require.main === module) {
 let result = addOne("7 Days Tour"," Join us for the Best of Helsinki!","https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
 console.log(result);
 console.log("getAll called:", getAll());
 console.log("findById called:", findById(1));
 // rest of the tests here
}

Tour = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Tour;
