'use client'
export default function ArrowSlide(props) {
    const { texto } = props;

    return (
        <div className="btn-container container mx-auto px-8 flex justify-center items-center align-middle">
            <button className="btn-flecha flex justify-center align-middle  leading-8 text-black  p-8  text-3xl px-1 font-3xl ">{texto}</button>
        </div>
    );
}
