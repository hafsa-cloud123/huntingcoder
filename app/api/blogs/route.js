import { NextResponse } from 'next/server'
const fs = require('node:fs');
export async function GET(req,res) {
  
  fs.readFile('blogdata/how-to-learn-flask.json', 'utf-8', (err, data)=>{
    console.log(typeof data);
  });
  return NextResponse.json({ name: 'hafsa' }, { status: 200 })
  // return NextResponse.json({ data:JSON.parse }, { status: 200 })
}
//ya upr wala code backend ki file ko neechy terminal mein read kr ky show krwata ha , ya read file ka code ha.



// import { NextResponse } from 'next/server'
// const fs = require('node:fs');
// export async function GET(req,res) {
  
//   fs.readFile('blogdata/how-to-learn-flask.json', 'utf-8', (err, data)=>{
//     // console.log(JSON.parse(data))
//     console.log(res.query)
//     // const data = JSON.parse(data);
    
//     res.status(200).json({data:JSON.parse})
//     // return NextResponse.json({data:JSON.parse}, { status: 200 });
//                 // return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 });

//   });
  // return NextResponse.json(data, { status: 200 });
//   return NextResponse.json({ data: JSON.parse(data) }, { status: 200 })
  // return NextResponse.json({ JSON.parse(data) }, { status: 200 })
  // return NextResponse.json(JSON.parse,(data), { status: 200 })
  // res.status(200).json({ data: JSON.parse(data) });
// }


// import { NextResponse } from 'next/server'
// import fs from 'node:fs/promises'

// export async function GET(req) {
//   try {
//     const data = await fs.readFile('blogdata/how-to-learn-flask.json', 'utf-8')
//     const parsedData = JSON.parse(data)

//     return NextResponse.json({ data: parsedData }, { status: 200 })
    // return NextResponse.json({data:JSON.parse}, { status: 200 });


//   } catch (error) {
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
//   }
// }
