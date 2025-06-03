import type { NextPage } from 'next';
import Image from "next/image";

const Footer: NextPage = () => {
	return (
		<div className="w-full relative bg-white h-[30.563rem] overflow-hidden text-left text-[1.063rem] text-dimgray-200 font-sora">
			<div className="absolute top-[4.125rem] left-[2.188rem] w-[80.375rem] h-[23.5rem]">
				<Image className="absolute top-[21.105rem] left-[0rem] w-[80.375rem] h-[0.063rem]" fill alt="" src="/images/footer/line.svg" />
				<div className="absolute top-[22.75rem] left-[29.125rem] text-[0.938rem] leading-[0.75rem] text-center text-dimgray-100">
					<span>{`Full Copyright & Design By`}</span>
					<span className="text-blue">{` @threelayed `}</span>
					<span>– 2025</span>
				</div>
				<div className="absolute top-[0rem] left-[0rem] w-[18.063rem] h-[8rem]">
					<div className="absolute top-[3.5rem] left-[0rem] leading-[1.5rem]">
						<p className="m-0">A smart and professional solution</p>
						<p className="m-0">for all SaaS, software and tech</p>
						<p className="m-0">companies & digital agencies.</p>
					</div>
					<b className="absolute top-[0rem] left-[0rem] text-[2rem] tracking-[-0.04em] leading-[1.875rem] font-ibarra-real-nova text-blueviolet">
						<span>Three</span>
						<span className="text-gray-200">Layed</span>
					</b>
				</div>
				<div className="absolute top-[0.625rem] left-[36.25rem] w-[7.875rem] h-[13.375rem]">
					<div className="absolute top-[2.75rem] left-[0rem] leading-[2.125rem]">
						<p className="m-0 text-blueviolet">Home</p>
						<p className="m-0">About Us</p>
						<p className="m-0">Service</p>
						<p className="m-0">Blog</p>
						<p className="m-0">Contact</p>
					</div>
					<div className="absolute top-[4.563rem] left-[0rem] bg-blueviolet w-[3.313rem] h-[0.063rem]" />
					<div className="absolute top-[0rem] left-[0rem] text-[1.375rem] leading-[1rem] font-semibold text-gray-200">Navigation</div>
				</div>
				<div className="absolute top-[0.625rem] left-[59.125rem] w-[16.688rem] h-[6.169rem] text-[1rem] text-gray-100">
					<div className="absolute top-[3.168rem] left-[0rem] w-[16.688rem] h-[3rem]">
						<div className="absolute top-[0rem] left-[0rem] w-[16.688rem] h-[3rem]">
							<div className="absolute top-[0rem] left-[0rem] rounded-[40px] bg-whitesmoke w-[16.688rem] h-[3rem]" />
							<div className="absolute top-[0.52rem] left-[14.125rem] w-[1.938rem] h-[1.938rem]">
								<div className="absolute top-[0rem] left-[0rem] rounded-[100px] bg-blue w-[1.938rem] h-[1.938rem]" />
								<Image className="absolute h-[64.84%] w-[76.77%] top-[19.35%] right-[20%] bottom-[15.81%] left-[3.23%] max-w-full overflow-hidden max-h-full object-contain" fill alt="" src="/images/footer/Vector.svg" />
							</div>
							<div className="absolute top-[1.125rem] left-[1.5rem] leading-[0.75rem]">Enter your e-mail</div>
						</div>
					</div>
					<div className="absolute top-[0rem] left-[0rem] text-[1.375rem] leading-[1rem] font-semibold text-gray-200">Our Newsletter</div>
				</div>
				<div className="absolute top-[9.48rem] left-[59.125rem] w-[7.438rem] h-[3.906rem] text-[1.125rem] text-gray-200">
					<div className="absolute top-[0rem] left-[0rem] w-[7.438rem] h-[3.906rem]">
						<div className="absolute top-[0rem] left-[0rem] leading-[1rem] font-semibold">Social media</div>
						<Image className="absolute h-[25.28%] w-[16.81%] top-[73.6%] right-[22.69%] bottom-[1.12%] left-[60.5%] max-w-full overflow-hidden max-h-full" fill alt="" src="/images/footer/Group 1000000921.svg" />
						<Image className="absolute top-[2.875rem] left-[0rem] w-[0.563rem] h-[1rem]" fill alt="" src="/images/footer/icon.svg" />
						<Image className="absolute h-[26.4%] w-[13.45%] top-[73.6%] right-[59.66%] bottom-[0%] left-[26.89%] max-w-full overflow-hidden max-h-full" fill alt="" src="/images/footer/Group 1000000920.svg" />
					</div>
				</div>
				<div className="absolute h-[5.32%] w-[23.72%] top-[50.45%] right-[76.21%] bottom-[44.23%] left-[0.08%] text-[1.25rem] text-dimgray-300">
					<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
						<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
							<Image className="absolute h-3/5 w-[5.25%] top-[24.86%] right-[94.75%] bottom-[15.14%] left-[0%] max-w-full overflow-hidden max-h-full" fill alt="" src="/images/footer/icon.svg" />
							<div className="absolute top-[0rem] left-[1.563rem] leading-[1.25rem]">contact@three-layered.com </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
