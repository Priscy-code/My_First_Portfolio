interface CardProps {   
    title: string;
    description: string;
    image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className='flex flex-col h-full'>
      <img src={image} alt="" className='w-full object-cover rounded-t-lg h-[150px] sm:h-[200px]' />
      <div className='flex-grow p-4 bg-white rounded-b-lg'>
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3'>{title}</h1>
        <p className='text-sm sm:text-base'>{description}</p>
      </div>
    </div>
  )
}

export default Card;