const outEl = document.querySelector("#output");


//                    *FOR EACH LOOP


// console.log(businesses);

// const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// let zipCodeProperty = "addressZipCode"

// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     // <section>
//     //   ${business.addressCity}, ${business['addressStateCode']} ${business[zipCodeProperty]}
//     // </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });


//                  * FILTER METHOD



// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//   let inNewYork = false

//   if (business.addressStateCode === "NY") {
//       inNewYork = true
//   }

//   return inNewYork
// })

// console.log(newYorkBusinesses);

// newYorkBusinesses.forEach(business => {
//   outEl.innerHTML += `
//   <h2>${business.companyName}</h2>
//   <section>
//     ${business.addressFullStreet}
//   </section>
//   // <section>
//   //   ${business.addressCity}, ${business['addressStateCode']} ${business[zipCodeProperty]}
//   // </section>
// `
// outEl.innerHTML += "<hr/>"
// });

// const manufacturingBusinesses = businesses.filter(business => {
//   let ifManufacturer = false
//   if (business.companyIndustry === "Manufacturing") {
//     return true
//   } else {
//     return false
//   }
// })


//                  * MAP METHOD



// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// const agents = businesses.map(business => {
//     return {
//       fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//       company: business.companyName,
//       phoneNumber: business.phoneWork
//     }
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.fullName}</h2>`;
//   outEl.innerHTML += `<p>${agent.company}</p>`;
//   outEl.innerHTML += `<p>${agent.phoneNumber}</p>`;
//   outEl.innerHTML += "<hr/>";
// });


//                   * FIND METHOD


// const outEl = document.querySelector("#output");
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
              
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}
//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//                 <section>
//                 ${foundBusiness.purchasingAgent.nameFirst},
//                 ${foundBusiness.purchasingAgent.nameLast}
//                 </section>
//             `;
//         }
//     });


//                    * REDUCE METHOD



// businesses.forEach(business => {
//   /* CALCULATE ORDER SUMMARY */
//   /* CALCULATE ORDER SUMMARY */
//   let totalOrders = business.orders.reduce(
//     (currentTotal, nextValue) => {
//     return (currentTotal += nextValue)
//     },
//     0
//   );

//   outEl.innerHTML += `
//       <h2>
//           ${business.companyName}
//           ($${totalOrders.toFixed(2)})
//       </h2>
//       <section>
//           ${business.addressFullStreet}
//       </section>
//       <section>
//           ${business.addressCity},
//           ${business.addressStateCode}
//           ${business.addressZipCode}
//       </section>
//   `;
//   outEl.innerHTML += "<hr/>";
// });

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
// const totalRainfall = monthlyRainfall.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(totalRainfall)

// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue);

// console.log(sentence)


//            *BIG SPENDERS

// //     let bigSpenderArray = [];
// //     const biggerSpender = businesses.filter(business => {

// //     business.orders.forEach(order => {
// //         if (order > 9000) {
// //             bigSpenderArray += order
// //         } 
// //  });
//  }
// // console.log(biggerSpenderArray);

// don't know why I made it so complicated, thought I had to start with an empty array.

const bigSpenders = businesses.filter(business => {
  return business.orders.find(order => order > 9000)
})
console.log(bigSpenders)



