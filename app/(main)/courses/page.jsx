import genAxios from "@/hooks/genAxios"
import Content from "./content"

async function getData() {
    const axios = genAxios()
    const resp = await axios.get('/api/v1/courses/')
    const data = resp.data
    return { data }
}

export default async function Courses() {
    const data = await getData()

    return (
        <Content data={data} />
    )
}
