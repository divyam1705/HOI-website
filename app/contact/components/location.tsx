const Location: React.FC = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row justify-center pt-5 md:py-20 p-5">
            <div className="w-full md:w-7/12 !h-96 md:mr-5 mb-5 md:mb-0 px-5 ">
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD0-qdJ6jKPGdE57KbocyDpGKuyla46Dk4&q=9516+Lee+Hwy,+Fairfax,+VA+22031"
                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9c5f0b1e!2sEnvato!5e0!3m2!1sen!2sus!4v1611815479925!5m2!1sen!2sus"
                    // style={{ borderRadius: "10px" }}
                    className="rounded-2xl w-full min-h-[24rem] h-full"
                    allowFullScreen={false}
                    loading="lazy"
                ></iframe>
            </div>
            <div className=" w-full md:w-5/12 flex flex-col items-start px-6 py-5 md:pl-20">
                <h2 className="text-left section-title md:!text-4xl">
                    Our Location
                </h2>
                <div className='mt-4 ml-1 section-text text-opacity-70'>
                    <div>Zora Technologies Inc.</div>
                    <div>9516 Lee Highway, Suite C</div>
                    <div>Fairfax, VA 22031</div>
                    {/* <div>Office Hours: 9 AM - 5 PM (Local Time)</div> */}
                </div>
            </div>
        </div>
    );
};

export default Location;
