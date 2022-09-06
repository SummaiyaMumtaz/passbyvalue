let Student ={
    
    summaiya:{ 
    math:{
       sumaiya_mid : "30",
        final : "45" ,
        total : "75",
    },
    english: {
       sumaiya_mid : "21",
        final : "48" ,
        total : "69",
    },
    science:{
       sumaiya_mid : "42",
        final : "49" ,
        total : "91",
    }
    },

    fatima:
    {
        math:{
            fatima_mid : "41",
            final : "39" ,
            total : "80",
        },
        english : {
            fatima_mid : "18",
            final : "45" ,
            total : "63",
        },
        science :{
            fatima_mid : "43",
            final : "43" ,
            total : "86",
        }
    },
    
    ali:{
     math:{
        alli_mid : "30",
        final : "40" ,
        total : "70",
    },
    english : {
        alli_mid : "20",
        final : "20" ,
        total : "40",
    },
    science :{
        alli_mid : "30",
        final : "45" ,
        total : "75",
    }
    },

    ahmed :{
        math:{
           ahmad : "48",
            final : "33" ,
            total : "81",
        },
        english : {
           ahmad : "30",
            final : "40" ,
            total : "70",
        },
        science :{
           
           ahmad : "25",
            final : "47" ,
            total : "72",
        }
    }}

    let row = document.getElementById("row");
    let rowo = document.getElementById("rowo");
    let orgo = document.getElementById("orgo");
    let org = document.getElementById("org");

let c = Object.values(Student);
   let a;
for(let i = 0 ; i< c.length ; i++){
   // console.log(Object.keys(c[i]))
    let o = Object.values(c[i])
    let o2 = Object.values(o)
    console.log(o2)

   //object
    function worko(){
        let B = {
            ...o2,
            foo: "this is new obj",
        }
        console.log(B);
    }
    }

    //array
    let aray =[[1,2,[11,12,13,14]],
    [3,4],
    [5,6]];
    org.innerHTML += aray;

   function worka(){
    // for(let i =0 ; i <array.length ; i++)     {
    //     for(let j=0 ; j < array[i].length ;j++){
    //      z = array[i][j];
    //  let ArrayB = [...array[i][j]]
    //  console.log(ArrayB)
    // }
    // }
    // i=0
    // j=i+1;
    // z = aray[1][2];
    let ArrayB=[...aray[0][2] , "this is copy of array A"];
      console.log(ArrayB)
    row.innerHTML = ArrayB;
    
   }



  //  }
       // a = Object.values(c[i])
        //console.log(a);
        //copy array
       // let B;
     //    B = [...a,"copy array"]
     //    console.log(B);