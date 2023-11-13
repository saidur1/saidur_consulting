import Head from "next/head";

const NewsLetter = () => {
    return (
        <>
            <Head>
                <script
                    type="text/javascript"
                    src="https://campaigns.zoho.com/js/zc.iframe.js"
                />
            </Head>
            <div className="min-h-[calc(100vh-145px)] container flex justify-center items-center text-center ">
                <iframe
                    frameborder="0"
                    id="iframewin"
                    width="100%"
                    height="100%"
                    style={{
                        width: "500px",
                        height: "800px",
                        paddingTop: "100px",
                    }}
                    src="https://zmp-glf.maillist-manage.com/ua/Optin?od=11287ecc6d7829&zx=131ca9a8b&tD=110677e07fe0af3c1&sD=110677e07fe0b0f4f"
                />
            </div>
        </>
    );
};

export default NewsLetter;
