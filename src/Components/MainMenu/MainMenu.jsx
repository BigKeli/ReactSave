function MainMenu(){

const Row = [
];

 return(
    <div className="bg-gray-900 w-48 h-64 rounded-lg">
      <div className="flex p-2 gap-1">
        <div className>
          <span className="bg-red-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full" />
        </div>
      </div>
      <div className="card__content">
      </div>
    </div>
 );



}
export default MainMenu