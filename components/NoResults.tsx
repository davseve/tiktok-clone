
interface IProps {
    text: string;
}

const NoResults = ({ text }: IProps ) => {
    return (
        <div className='flex justify-center items-center h-full'>
            <h1 className='text-2xl'>{text}</h1>
        </div>
    )
}

export default NoResults;