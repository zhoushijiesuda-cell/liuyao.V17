"use client";
import {useState} from "react";
import {run} from "@/lib/masterV17";

export default function Page(){

const [q,setQ]=useState("考试能过吗");
const [a,setA]=useState(12);
const [b,setB]=useState(34);
const [r,setR]=useState<any>(null);

return <div style={{padding:40,maxWidth:900,margin:"auto"}}>
<h1>V17 顶级大师版</h1>

<input value={q} onChange={e=>setQ(e.target.value)} style={{width:"100%"}}/>
<br/>
<input type="number" value={a} onChange={e=>setA(Number(e.target.value))}/>
<input type="number" value={b} onChange={e=>setB(Number(e.target.value))}/>

<br/><br/>
<button onClick={()=>setR(run(q,a,b))}>起卦</button>

{r && <div style={{marginTop:20,lineHeight:1.8,fontSize:18}}>
{r.finalText}
</div>}

</div>
}
