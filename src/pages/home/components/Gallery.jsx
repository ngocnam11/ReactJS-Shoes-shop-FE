import Gallery1 from "../../../assets/gallery/Gallery1.png";
import Gallery2 from "../../../assets/gallery/Gallery2.png";

const HomePageGallery = () => {
    return (
        <div className="grid grid-cols-12 gap-5 my-10 px-3">
            <div className="col-span-5">
                <img
                    src={Gallery1}
                    alt="Gallery"
                    className="w-full rounded-lg object-cover h-[490px]"
                />
            </div>
            <div className="col-span-7">
                <img
                    src={Gallery2}
                    alt="Gallery"
                    className="w-full rounded-lg object-cover h-[490px]"
                />
            </div>
        </div>
    );
};

export default HomePageGallery;