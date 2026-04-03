function pickUseGod(q:string){
if(q.includes("考试")) return "父母";
if(q.includes("工作")) return "官鬼";
if(q.includes("钱")) return "妻财";
if(q.includes("找")||q.includes("丢")) return "子孙";
return "父母";
}

export function run(q:string,a:number,b:number){

const move=(a+b)%6||6;
const useGod=pickUseGod(q);

// === 核心：直断 + 推演混合 ===
let direct="";
let reasoning="";
let advice="";
let risk="";
let timing="";

// 直断（经验覆盖规则）
if(move===1 && useGod==="子孙"){
 direct="能找回，而且有明显转机";
 timing="3天内或出现关键线索时";
}else if(move===6 && useGod==="父母"){
 direct="结果偏稳，大概率可成";
 timing="近期逐步兑现";
}else{
 direct="此事存在变数";
 timing="取决于后续变化";
}

// 推演补充（像真人）
if(useGod==="子孙"){
 reasoning="目前信息不足，但卦中有动象，说明后续会出现转机";
 advice="重点关注新出现的线索或他人提供的信息";
 risk="拖延会错过关键时机";
}

if(useGod==="官鬼"){
 reasoning="受外部规则或压力影响较大，需要顺势而行";
 advice="避免硬碰硬，借助规则或他人更容易推进";
 risk="强行推进容易受阻";
}

if(useGod==="父母"){
 reasoning="关键在准备与基础是否扎实";
 advice="加强准备，细节决定成败";
 risk="基础不稳会影响最终结果";
}

// 模糊表达（真人风格）
let finalText = `${direct}。${reasoning}。建议：${advice}。需注意：${risk}。应期：${timing}。`;

return {
useGod,
finalText
};

}
