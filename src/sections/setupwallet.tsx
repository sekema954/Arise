//Setup wallet

import { Title_font, Ui_font } from "../constants/fonts"
import { HunterEarningsSteps } from "../constants/wallet_constant"
import Newsletter from "../components/newsletter"

const SetupWallet = () => {
    return(
        <section className="bg-[#2B2B2B] py-20 text-white lg:px-20 px-5">
            <header className="text-center lg:text-start">
                <h1 style={{...Title_font}}>How It Works</h1>
                <p>Find Out How to Get Started</p>
            </header>
            {/**card container */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 py-20">
                {HunterEarningsSteps.map((step)=>(
                    <div key={step.id} className="w-[330px] max-h-[438px] rounded-xl bg-[#3B3B3B] flex lg:flex-col gap-4 items-center justify-center text-center px-4 py-6">
                        <img className="w-[100px] h-[100px] lg:w-auto lg:h-auto" src={step.icon} alt={step.title} aria-label={step.title} />
                        <div className="flex flex-col">
                            <span className="lg:text-xl font-bold">{step.title}</span>
                            <span className="text-sm lg:text-md">{step.context}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center lg:justify-start">
                <button style={{...Ui_font}} className="bg-[#8200DB] w-[300px] h-[50px] rounded-lg">Register Now</button>
            </div>
            <Newsletter />
        </section>
    )
}


export default SetupWallet