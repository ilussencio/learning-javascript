interface MyProps {
    titulo: string
    subtitulo: string
}

export default function Article({titulo, subtitulo}: MyProps){
    return <>
        <h3>{titulo}</h3>
        <h5>{subtitulo}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio laborum fugiat temporibus ea consectetur! Omnis dolorem iure, natus, sunt ut culpa cupiditate, molestiae dolorum sit consequuntur provident cum voluptatem!</p>
    </>
}