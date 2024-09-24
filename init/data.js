const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSERISEhAVExUTGBUbFhgSGBkYGhkXGRUYGBsVFh0aHiggGh0lGxcWIjIiJSorLy4uGB82ODMtNyotLisBCgoKDQ0NGg8PFjEiHyU4KzcxKy04KzgtLTgrKysvKzg1NzctLSsrNSs4NzIrKzgtKys3LTcrKysrLSsrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCCAH/xABDEAACAQIEAwYDBAYJAwUAAAABAgADEQQSITEFBkEHEyJRYXEygZEjQmKhFFJyscHRQ4KSorLC4fDxFTNTCBYkNIP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AvGIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICImhxfjFHDJnrVAo6CxLH2UamBvxKq472tBGqCkqoqEC9VWZzdbghVIAv7nbz0kWpdpeNxDikj1HqN4QKSBAxN/gVczfU+t4F64niFKn/3KqJ+2wH7zOdW5qwi/04P7Cs35gWlVrwrH03fv8MyjplDVCSTuXUZT9b6zs8L5Zxdax7rul8611PyX4vqBAl1XnjDjZareygf4mE2uG8zJWNOyMA5Kkki6uBcBgOjC9j56TRwHI9JbGrUaqfIeBfy8X5yRYPh9KkLU6ap55QAT7nc/OBsxEQEREBERAREQEREBERAREQEREBERAx16yopZ2CqNyxsB7kzWwXE6dVmVM5K6ktTqKPkzKA3ylb9sHNLK9PBUKjIRZ6zIxU6/BTuNdvER+z5ze7GcHaliKttXZVv55QSf8QgTPjXMGGwihq9YJe9gAWYkdAFBMjB55xGI0wHD6lQdKlbwp+Rt9WEk+E5ewtMMEoJZnNQq12XvDuyq1wp9rTpgQIJ/0Pi2J/8AsY4YdT9yhuPQ5bH++ZvYDs8wiHPV7yu3nVbr8rH6kyXRAoPtfwdJeIU6FKmtKmKClhRVEObO2vw75cov5CQbD/ZV1ampBVhYsQbEHcBQFv8ALrPojmrkHD46t371KqVAgQZCuWwJNyCpudfPoJVfPHZ5iMFmrITXw+5dR4qfn3ii/h/ENPO3ULj5X5tw2OX7J8tQDxUn0ceo/WX8Q0nenyzw3iZpspJIym6uhs6nzBHsPe2t5b3KvaFdVXEnOuwrKNf/ANFA19wL+nWBZETUq8TorRNdqqCkBfPcZbe/XylYcx871sSxWgXoUBsR4alT8RI1RfIDXz8gFl4zjWHouEq16aMdbMwBt6+XzmzhsXTqC9OojjzRg37pQrPud/5+Z/nP2hU1uNCOo/gd4F/xKf4dzZi6O1Yuo+7V8Y+p8X0MsblLjv6Zh+9KBGVmV1BuAR1BsNCCD84HaiIgIiIGpiuI0qbBWcZjqFUFmt55VBa3rabSsCLg3BkE7T8M6pTrozBCclVQbAk/AzAb9V181nG5Q5nOGIR7tRbcblCfvL6eY/juFqxPFGqrqGUhlYAgjUEHqJ7gIiICIiAmnxfiKYahVr1D4KSMx8zYbD1J0HqZuSMdpVBH4bXWoTa9I6G12FVCoPpe14FA43F1cRWfEVQc1ZyxOtrk7D0A0HoBL97NsJ3fD6Wlu8Jf66A/MKJVfJ+Eo4rFUKVQN3bvaxUrmyIz5TexCkKQfS+3S+1UAAAWA2AgfsREBERAQRE0ON8WpYWi1as1lXYDdm6Io6k/6mwBMCA879llOtmr4HLSqnVqR0pufw/+Nj/ZPkLkyq8L32GqvRekyMCM6OLMtuuultd9jpYyyeI9qNdrihQp0h5uS7e/QD85Fsdj62IfvcRUNR7WF7Cw30AAA9hAwBnYZWZsl8wS/hzWtmK7XtMonhZ7ED2J6nkT8q1Qil2Ngu8DzisQEFzv0E6fI3NzYSoykd4lQ3dQfELD4k6XHl1v0kAx/FGqEna+w8h0E7vAsJlTMdzA+i8Fi0rU1qU2DI4uCP8Aeh6WO0zyvuzfjVNKdelVqogptTYd4wUDvMwtqfNL2/FJunEaJ2rUz7Op/jA2omNaynZgfYiZIGlxnh64ihVoNtUUi/keje4Nj8pQtOs1MstTwsjFWB6MGykfXSfQ8j3MHKOBxOepXpAG13dWNPQD4nIIBsBu19oEb7PuLutUYcnMj5ra/Cygsbehsbjz1872LPnbhnHG716NGqjPTqP3FTOWV6au1rOBcsAAb21EvDlfjYxVLXSolg4/cw9DY+1jA7MREBERAStu1zjLhaeGpBWFw9XxajXwr6b5tfJZZBMouhV78NVbXvmaob6/Gxcb+Vxb2ECJ4rEVrqRnpAEWai5DgkaMWFso+L8pJafaVxAL3aV1YIllqGmGZiu7Nc+LVgNAL5et7zziOGUxRrrY2dWLEm9rXYEeVjrI5wjCV6lMGlRrOoJF6SOwuDtdRaBJKnPPE2v/APKqfc+ClRHva428+o6Xmu3MvEGPixeKHif7yLpbT4Rt5dfOZuF8BrEDvuG4uqbt92ogKlRlFyRazZjtrca6ENv4flavcEcFqNbLfPWC7bjxMQb6a2+Q6hxl4xiCo7zF1ybC+euxPz1AP0mCpjL/ABVc3u1/4zvUuReIEEHh6C7MQWq0rgEiy+FtgL9La7aWOSt2a49rHu8PSAvvU9SdSFOw0+XvA5P/ALwrLZf02v5AB6l/qJpY3idauR3tapUA+EVHZ7e2YnWc79HCufEr5SQGS5Uj9ZSQCQemm038FQv4j8I/M+UDLh6NhmPyH8ZlBvPNSpmM9KIHtZkWeBDPsBuYGVdTb6zmczYZ3o+D7rAkDqLEflcGdZFsLTxiawRSzbD8/SBX1BGD+Ibec7J4rUK+EhVGnh/n/Kc7jSs4KgWLEBR89vrp8pJeT+zLiNZbGmKNJrHNXBT+yvxn5gD1gaeAqqqMKimoahu2bW9+hve9p+0cSaZ+zZsnRH8QHsdwPSXRw7svwKUkWsjVqgAz1O8q08zdSFV7KPIfv3n5jOyvAPbJ31G2+Spmv794G/K0CoBxVv1F+kLxRgbgW1B8Jttp5df+LS0m7IsL0xOIHv3R/wAkxnshodMXW+aof4CBWq8cqgWFSqNLaVWHW4Olvb1G81cfxWu9Oon6TiMr3urVqjKQd1ILaqfI3HpLOfsfTpjXHvTB/wAwmGv2O3U5cdrbTNR0v62eBUGHwdNWp1GqlBmXMCMpW51ZWvrbfbzlm8pcX/6dWLMalWnWKipmLPYAEhwSbC1zYDe533HF4t2ccQR6dMURUDEgNSOZAdNXLDwCxOpHnOzV5VxGCoUlxLI+a4Bp3IQ7ikSbZvDcg26EdASFx4bELURXRgysAVZdQQeomWVn2ccWNGscI5+zq3NK/wB2oNSvoGFz7jzMsyAiIgcrmvFmlgcXUX4ko1Sv7WQ5R9bSo8DSyoqj7oA+gtLJ7Sa2Xh9QDeo9Ffkaqlv7oaV5RFhAxd/T/SsHQqIrrXrIrqwuChYLYj1JH0MuyhRVFCIoRVFgqgAAeQA0E+dOJO9PidPvBlahiMPp5BXRh9d/nPo+AiIgJWnazzTlX9Aot4nAOII6UztS936/h/aBllyn+1fl4pijjM1qVZLObXC1kWyhragOqgA62I13ECCUKeY2Hz9BNytVA8K7CaIxIRNDctMdKtA6SGZlM1KbzYV4GWpUCi5nvCUzbM27fkPKaVA949/uIfq3+k6awPRNhcyOPxGnXxHdl/CmoX9Y/wC+k/OY+Kn/ALVPc/ER+6aWN5HxtHC0sc9MrSqHQg+JBfwO4+6Gvofa9ri4WdyLx3CYWoxrUEDNqK4TM4/Cdzl/Z67g7i2cJiUqotSmwdGF1ZdiJ8zcL4hmslT4uh6N/rJnynzW+BY3OagdXQnbzdL6A/kevQgLsia3DsdTr01q0nDo4urL/vQ+k2YCIiAiYsRiEpqWd1RR1YgD6mRziPO1FLikrVT5/Cv1Iv8AQQJRNXiWCSvTei+oYa23B3DDyIIBB8xK54lzZiatxn7pfKlof7XxfQiZeDcTeq4yG2KQEo3Sso3pVbb/ALX8dw4XFMFUoVSjHLUpMCGHmDdai+mx/LcGWxwHiQxOHp1hoWHiHkw0YfUG3paaHMnBVroKhpFqiL8KMFLA65bnQ2NyPn5zV5PotRZ6Yw9emj+K9UqVDCw0sAbkW8/hgSmIiBw+bMJUq06a08NTxFql2Wo2WwCMAy30Jubb9Zx+GcCLVV73AdyFObMKgI0NwMoOt5NIgQ3mbs7w2MxH6QalSk5Kd53ZWz5LAHUGzWAFx0G0mURAREQEwY7B061N6VVA6OCGVhcEGZ4gVpxTsfw7Kf0avUpHoKlqi+3RvmSZVHEMBUw9apRqLZ6bWYfuI9CLEeYIn1FK+7TOTRXV8ZQV2rqEDIliHUG2a1r5lU9DqBsdIFO0cR6/WesViibU1OrbnyHUz87tQai1S6vfwL3Z8x8R6dddLW2I1mtUw65gPTqdzcC35/lLZg7uGZEULmAA8yP93mDi3EsoyIQWO5HQTHy7xFMNVZ1pozlSgSqhqK2a2mUb6gbEfvk15R7LKjVRVxqinRGopAjMx/VbKSFT+sSdtJBp9l/In6Sy4rEJ9gpuit/TMDufOmD9TpteXbVoqylGUMrAhlYAggixBB3Fuk/adMKAqgKFAAAFgANAABsJ6gUzzryWmDVrIWwTtmVwfHhajZR4ib3pHKBm3GgJ0BkLrUqtNxTq/HYhCxPdVVJHi03Ntj66ifTFWmGUqyhlYEEMLggixBB3FpS3aDyQcJ9rTBfB2YAbnCl2DX82p5hp5ZiDpA53KXNFXAvnQO9Bz9pSYNmBuFGRQPCAAfl6bXhwriVPEUlq0mzK31B6qw6EeU+babsjWawe3hYZftVBYBWax0JBsZKeSOI18LUNSkQKRsHo6ZCRq1iB8Xi36fUQL1kS5q5nak3c0CMw+NrXynoqg6X6m9/5Q3jPNeLrVcjqVoEXLI4VRodHG52A1PXacRcaa7GlhaT4l1UsRS08IIBN9yMzKNAd4HRxvEGds1R2dvNjcj2vsPQTTqYsec55wmJGZqtGrnY6L3biwsAAARfpJXyhyDVrkVsaGpUh8NI3V3/b6ovp8R9OoavLvBK2Nb7MZaYPiqMPCPRf1m9B8yJaXBOCUsKmWmup+J21Zvc/wGk3sPQWmqoihFUWVVFgAOgA2mSAiIgIiICIiAiIgIiICIiAiIgc/ivA8PiRavQSp6keIezDUfWRdeyvAd5nYVmF7hDUso9NAG/vScRA4/A+V8JhAe4oBSxuSxLt6WZySAL7TsREBETBjcXToo1Sq6oii5ZjYCBnkZ5p5ywmEvTqnvahGtGmAxsR9+/hUEHZjqNgZDOaO0KrXvSwWajT2NU6VGH4B/Rj1+L9kyIUMCACx0GpZmPzLMT+8wNQ4ehUxRYUGpUTcrTzGoqWtZNADl1Jt0tbabXFMRUo/bJUAz5VNNx4SRexTW4Nt/YSUcA5Vr4ixSn3dP8A8tYEAjzppoz9NfCpvoxlc8UqO+IbO9+7zqpXa2e2i2sL5R66bwOVxLjFWuxDuWsdEGgHuBaW3/6fbWxgZED2onMoAOUmoMntdb/8St8fjKhWzvmA9NZaPYFRPdYyoRoz01F/wqxt/eBt+KBbEREBERAREQEREBERAREQEREBERAREQEREBETzUW4IBIuDqNx6i8Dic0c0UsEgLgvUa+Smu5t1J2VdRr9AZUnGuLV8dUzV2uoPgproiew6n8R1+Wkm+G4Tiu8bB4uk2KpNcpW3tbZmYnQ9NTmB2zCdDg/INGmS1du/wBTlQiyAdM4/pDbe/h/DAgvAeXa2Jt3NO69aj+GmPOxtdjvooOo1IlicC5KoUCr1Pt6q2IZxZVPnTTUL7nM34pJlUAAAWA2A8vKfsBKR7X+HUKGKoijRSmaiO9TIoXMxfQm39b6mXdKT7aat+IU1/Vw6fnVq/ygcHkTl9MfjVo1c3dqju+Q2NlsAL9Lsw+V5fvCOFUcLSWjQpinTTZRfc7kk6sSdydTK27DcDpi8Qepp0l/qgu3+NPpLWgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICV32g9n9bHYgYmjWpg92iFKgYfCztmDC++fa3TfWWJECP8icAbA4NKDlWqXdqhS+UszE6XAJsuUX9JIIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/9k=",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  module.exports = { data: sampleListings };