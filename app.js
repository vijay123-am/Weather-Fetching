async function fetchweather() {
    const input=document.getElementById("input").value
    const name=document.getElementById("name")
    const Temp=document.getElementById("temp")
    const pressure=document.getElementById("pressure")
    const humidity=document.getElementById("humidity")
    const speed=document.getElementById("speed")
    const sunrise=document.getElementById("sunrise")
    const sunset=document.getElementById("sunset")
    const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=bfb12dd01a60ae5bd8c4e6c3e73af357"
    const response=await fetch(url)
    const data=await response.json()
    console.log(data?.name)
    console.log(data?.id)
    console.log(data?.cod)
    console.log(data?.coord?.lon)
    console.log(data?.coord?.lat)
    console.log(data?.weather[0]?.main)
    console.log(data?.weather[0]?.description)
    console.log(data?.weather[0]?.icon)
    console.log(data?.main?.temp)
    console.log(data?.main?.pressure)
    console.log(data?.main?.humidity)
    console.log(data?.wind?.speed)
    console.log(data?.sys?.sunrise)
    console.log(data?.sys?.sunset)
    name.innerText=data?.name
    const te=Math.floor(data?.main?.temp)-273
    Temp.innerText="Temp :"+te+"°C"
    pressure.innerText="Pressure :"+data?.main?.pressure
    humidity.innerText="Humidity :"+data?.main?.humidity
    speed.innerText="Speed :"+data?.wind?.speed
    sunrise.innerText="Sunrise :"+data?.sys?.sunrise
    sunset.innerText="Sunset :"+data?.sys?.sunset
}