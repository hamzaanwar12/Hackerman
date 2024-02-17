let container = document.querySelector(".container")
console.log(container)


let hackingStep = (message)=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve(container.insertAdjacentHTML("beforeend",message))
        }, 3000);
    })
} 


hackingAct = async()=>
{
    await hackingStep(`<span>Initializng the Hack program....</span>`)
    await hackingStep(`<span>Hacking Ashish Username....</span>`)
    await hackingStep(`<span>Username found Ashish17....</span>`)
    await hackingStep(`<span>Connecting to Facebook....</span>`)
    await hackingStep(`<span>Information has stolen....</span>`)
    await hackingStep(`<span>Getting Anonymous....</span>`)
    return(hackingStep("<span>Its Done....</span>"))
}
let check = hackingAct()
console.log(check)