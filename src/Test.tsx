import TopMenu from "./componets/TopMenu";
import menu from "../menu.json";

function Test() {


    console.log('arrayData', typeof menu);
    console.log("hi");

    // const res = menu;
    // console.log(res, typeof menu);

    // useEffect(() => {
    //     test();
    // }, []);

    // async function test() {
    //     try {
    //         const res = menu;
    //         console.log(res, typeof menu);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <>
            <header>
                <TopMenu />
            </header>
            <section></section>
            <footer></footer>
        </>
    );
}

export default Test;
