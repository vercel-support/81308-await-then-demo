// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function handler(req, res) {
  await sleep(5000).then(()=>{
    res.status(200).json({ name: 'John Doe' })
  })
}
