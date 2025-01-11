/* eslint-disable react/prop-types */
const WatchDescriptionCard = ({title, subtitle}) => {
  return (
    <div className="bg-black justify-center p-4 rounded-md">
        <p className="font-semibold">{title}</p>
        <p className="text-sm mt-2">{subtitle}</p>
    </div>
  )
}

export default WatchDescriptionCard