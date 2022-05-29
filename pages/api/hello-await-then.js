// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const generatePassword = async (delay) => {
  await sleep(delay)
  return {body: "Work-Quiet-Slept-Separate-8"}
}

const getPassword = async () => {
  return await getPassword(5000).then(res => res.body)
}

export default async function handler(req, res) {
  const password = getPassword()
  console.log({password})

  res.status(200).json({ name: 'John Doe' })
}
