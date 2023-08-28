import './privacy.css'
export default function PrivacyPolicyComponent() {
    return (
        <>
            <div className="px-4 ss:px-8 lg:px-16 inter mt-[86px] sm:mt-[118px] text-black">
                <div className="pt-3 job-banner ">
                    <h1 className="rany text-3xl font-medium ss:text-4xl md:text-6xl lg:text-7xl ">
                        Privacy Policy
                    </h1>
                </div>

                <ul className="flex flex-col gap-3  cookie-p list-disc  ml-6 lg:text-xl mt-[19px] sm:mt-[30px]">
                    <li >
                        <h1 className="text-[16px] font-semibold	sm:text-[22px]">
                            General policy
                        </h1>
                        <p className="text-justify">Smilax Global Company Limited respects your privacy. The information that you provide us with helps us to monitor our service and provide you with the services that you have requested. If you have any concerns,
                            questions or comments please email contact@smilaxglobal.com.</p>
                    </li>
                    <li>
                        <h1 className="text-[16px] font-semibold	sm:text-[22px]">
                            Information Request Forms
                        </h1>
                        <p className="text-justify">Smilax Global Company Limited operates a variety of online information collection forms. This data will be used solely for the purpose of performing the requested task and will not be passed to any third parties
                            or used for commercial gain, except for Smilax Global to contact the visitor in respect to their request.</p>
                    </li>
                    <li>
                        <h1 className="text-[16px] font-semibold	sm:text-[22px]">
                            Email newsletters
                        </h1>
                        <p className="text-justify">Smilax Global Company Limited operates email newsletters at periodic intervals. These are free to sign up to. What we ask of you is your email address, at times we may ask you for further information, which is used for demographic purposes. We do not give our email lists out to other parties under any circumstances. If at any time you wish to unsubscribe from our newsletter you may do so
                            by visiting our site emailing the web site editor. Your entry on our database will be removed as promptly as possible.</p>
                    </li>
                    <li>
                        <h1 className="text-[16px] font-semibold	sm:text-[22px]">
                            Surveys
                        </h1>
                        <p className="text-justify">On occasion we may conduct online surveys. This is used to gauge our service, collect demographic information and other information that
                            we may find useful. These surveys are optional. We will not share any of this information with third parties.</p>
                    </li>
                    <li>
                        <h1 className="text-[16px] font-semibold	sm:text-[22px]">
                            Security
                        </h1>
                        <p className="text-justify">While we strive to keep the information that you supply directly or indirectly secure please be aware that the Internet is not a fully secure medium.</p>
                    </li>
                    <li>
                        <h1 className="text-[16px] font-semibold	sm:text-[22px]">
                            Policy Changes
                        </h1>
                        <p className="text-justify">By using our site you agree to accept this privacy policy and are aware that our policy may change with time. Any changes to this policy will appear on this web page.</p>
                    </li>
                </ul>
            </div>
        </>
    )
}