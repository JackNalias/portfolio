<script>
	import SkillBadge from '$lib/components/skill-badge.svelte';
	import StepDescription from '$lib/components/step/step-description.svelte';
	import StepTitle from '$lib/components/step/step-title.svelte';
	import Step from '$lib/components/step/step.svelte';
</script>

<main class="flex-1">
	<section class="relative isolate px-6 py-14 lg:px-8">
		<div class="mx-auto max-w-2xl py-60 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Jack Nalias</h1>
				<p class="mt-6 text-lg leading-8 text-gray-50">
					Empowering Businesses in the Digital Realm: Tailored Web Solutions to Boost Your Online
					Presence and ROI.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/#contact"
						class="rounded-md font-bold hover:bg-gradient-to-bl bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] text-lg px-3.5 py-2.5 text-white active:outline active:outline-2 active:outline-offset-2 active:outline-white-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-current focus-visible:outline-white"
						>Hire me</a
					>
				</div>
			</div>
		</div>
	</section>
	<section
		class="flex flex-col sm:flex-row gap-12 text-gray-100 max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-32"
		id="about"
	>
		<div class="sm:w-1/2">
			<h2 class="text-white text-3xl sm:text-5xl font-semibold tracking-wide">About me</h2>
			<div class="text-lg text-gray-400">
				<p class="mt-6">
					Hello, I'm Jack Nalias, and I'm not just a web developer, but a creator of immersive
					digital experiences. My passion lies in merging design with functionality to craft
					websites that are both visually stunning and seamlessly operational.
				</p>
				<p class="mt-6">
					I strongly believe that each digital journey should have its own identity, and this drives
					my expertise in tailoring solutions that mirror your vision while resonating with your
					audience. Staying updated with the latest industry trends and technologies is at the core
					of my approach, ensuring that your project benefits from the most cutting-edge solutions
					available.
				</p>
				<p class="mt-6">
					My attention to detail sets me apart. I take pride in translating lines of code into
					user-friendly interfaces that are both aesthetically pleasing and fully functional. This
					synthesis of artistry and technical proficiency results in websites that don't just convey
					information, but captivate and inspire.
				</p>
				<p class="mt-6">
					Being a freelance web developer, I understand the importance of collaboration. I approach
					every project as a partnership, working closely with you to grasp your goals and
					aspirations. Your satisfaction is my ultimate goal, and I'm dedicated to exceeding your
					expectations.
				</p>
				<p class="mt-6">
					Whether it's an e-commerce platform, a corporate website, or a personal portfolio, I excel
					at finding the delicate equilibrium between elegant design and efficient functionality. My
					unwavering commitment to delivering excellence means that your digital vision is in
					capable hands, ready to be transformed into an online masterpiece that lingers in the
					minds of visitors.
				</p>
			</div>
		</div>
		<div class="sm:w-1/2">
			<section>
				<h2 class="text-white text-3xl sm:text-5xl font-semibold tracking-wide">Skills</h2>
				<ul class="mt-6 flex flex-wrap gap-4">
					<li>
						<SkillBadge color="red">Html</SkillBadge>
					</li>
					<li>
						<SkillBadge color="yellow">CSS</SkillBadge>
					</li>
					<li>
						<SkillBadge color="green">SASS</SkillBadge>
					</li>
					<li>
						<SkillBadge color="blue">Tailwind CSS</SkillBadge>
					</li>
					<li>
						<SkillBadge color="purple">JavaScript</SkillBadge>
					</li>
					<li>
						<SkillBadge color="pink">Typescript</SkillBadge>
					</li>
					<li>
						<SkillBadge color="red">React</SkillBadge>
					</li>
					<li>
						<SkillBadge color="yellow">Next.js</SkillBadge>
					</li>
					<li>
						<SkillBadge color="green">Vue 3</SkillBadge>
					</li>
					<li>
						<SkillBadge color="blue">C#</SkillBadge>
					</li>
					<li>
						<SkillBadge color="purple">.NET</SkillBadge>
					</li>
					<li>
						<SkillBadge color="pink">Blazor</SkillBadge>
					</li>
					<li>
						<SkillBadge color="red">Web APIs</SkillBadge>
					</li>
					<li>
						<SkillBadge color="yellow">Express.js</SkillBadge>
					</li>
					<li>
						<SkillBadge color="green">Nunjucks</SkillBadge>
					</li>
					<li>
						<SkillBadge color="blue">SEO</SkillBadge>
					</li>
					<li>
						<SkillBadge color="purple">.NET</SkillBadge>
					</li>
					<li>
						<SkillBadge color="pink">Microsoft Azure</SkillBadge>
					</li>
				</ul>
			</section>
			<section class="mt-12">
				<h1 class="text-white text-3xl sm:text-5xl font-semibold tracking-wide">Experience</h1>
				<ul role="list" class="divide-y divide-gray-800 bg-blue-950 rounded-md px-5 py-4 mt-6">
					<li class="">
						<div class="flex justify-between gap-x-6">
							<div class="flex min-w-0 gap-x-4">
								<div class="min-w-0 flex-auto">
									<h2 class="text-lg font-semibold leading-6 text-gray-200">
										Software Developer @ High Speed Two
									</h2>
									<p class="mt-1 truncate text-sm leading-5 text-gray-300">2021-09-27 - today</p>
								</div>
							</div>
							<div class="shrink-0 sm:flex sm:flex-col sm:items-end">
								<a
									href="https://www.hs2.org.uk/"
									target="_blank"
									class="text-white underline hover:text-gray-400">hs2.org.uk</a
								>
							</div>
						</div>

						<p class="mt-4 text-gray-300">
							As a software developer, I played a pivotal role in designing and crafting
							high-quality software applications. Collaborating seamlessly within cross-functional
							teams, I translated complex requirements into elegant technical solutions using a
							diverse range of programming languages and tools.
						</p>
					</li>
				</ul>
			</section>
		</div>
	</section>
	<section
		id="portfolio"
		class="max-w-[85rem] w-full mx-auto px-6 sm:px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center"
	>
		<header class="mx-auto max-w-2xl text-center mb-16">
			<p class="text-base font-semibold leading-7 text-emerald-500">Discover my work</p>
			<h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Portfolio</h1>
			<p class="mt-6 text-lg sm:text-xl leading-8 text-gray-100">
				Unveiling a collection of projects that embody my dedication to innovative web solutions.
			</p>
		</header>
		<div
			class="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 lg:mt-16"
		>
			<div class="sm:w-1/2">
				<img
					class="h-full w-full object-cover rounded-lg border"
					src="/zespra.png"
					alt="sample web agency website"
					height={1920}
					width={1080}
				/>
			</div>
			<div class="sm:w-1/2 flex flex-col justify-center">
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
					Web agency sample
				</h2>
				<p class="mt-6 text-lg leading-7 text-gray-400">
					This sample website showcases a harmonious blend of creative design elements and refined
					technical implementation. It is a testament to my commitment to elevating digital
					experiences through meticulous attention to detail and innovative problem-solving.
				</p>
				<div class="mt-8">
					<a
						target="_blank"
						href="https://www.zespra.com/"
						class="inline-flex rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:outline active:outline-2 active:outline-offset-2 active::outline-white"
					>
						Visit website
					</a>
				</div>
			</div>
		</div>
	</section>
	<section class="px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center">
		<header class="mx-auto max-w-2xl text-center">
			<p class="text-base font-semibold leading-7 text-emerald-500">
				Unlock your digital potential
			</p>
			<h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
				Let's Craft Your Digital Success Story Together.
			</h1>
			<p class="mt-6 text-lg sm:text-xl leading-8 text-gray-100">
				Ready to take the next step? Let's collaborate to create a web solution that resonates with
				your audience and achieves your goals.
			</p>
		</header>
		<a
			href="/#contact"
			class="mt-6 rounded-md font-bold hover:bg-gradient-to-bl bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] text-lg px-3.5 py-2.5 text-white active:outline active:outline-2 active:outline-offset-2 active:outline-white-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-current focus-visible:outline-white"
			>Hire me</a
		>
	</section>
	<section id="process" class="px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center">
		<header class="mx-auto max-w-2xl text-center mb-24">
			<p class="text-base font-semibold leading-7 text-emerald-500">How it works</p>
			<h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
				From idea to launch
			</h1>
			<p class="mt-6 text-lg sm:text-xl leading-8 text-gray-100">
				Diving into the layers of web development, detailing each step that nurtures your idea into
				the reality of an engaging, functional website Launch.
			</p>
		</header>
		<div class="max-w-2xl">
			<ol role="list" class="overflow-hidden">
				<li class="relative pb-10">
					<Step number="1">
						<StepTitle>Initial Consultation</StepTitle>
						<StepDescription
							>I invite you to share the details of your project during a complimentary 30-minute
							consultation call.</StepDescription
						>
					</Step>
				</li>
				<li class="relative pb-10">
					<Step number="2">
						<StepTitle>Proposal: Costs and Launch Date</StepTitle>
						<StepDescription
							>Following the consultation, I will diligently assess your project's requirements.
							Within 5 working days, you will receive a comprehensive fixed-price offer and a
							proposed launch date.</StepDescription
						>
					</Step>
				</li>
				<li class="relative pb-10">
					<Step number="3">
						<StepTitle>Development Commences</StepTitle>
						<StepDescription
							>Upon your approval, our team initiates the project's development phase. Throughout
							this stage, I ensure regular updates on the progress for transparency and effective
							communication.</StepDescription
						>
					</Step>
				</li>
				<li class="relative pb-10">
					<Step number="4">
						<StepTitle>Feedback & Refinement</StepTitle>
						<StepDescription
							>Upon the project's completion, I will deliver the finished product to you. I highly
							value your input and will promptly accommodate any adjustments or refinements based on
							your feedback.</StepDescription
						>
					</Step>
				</li>
				<li class="relative pb-10">
					<Step number="5">
						<StepTitle>Project Launch</StepTitle>
						<StepDescription
							>Your satisfaction is of utmost importance to us. Once the final product meets your
							expectations, I will initiate the project launch.</StepDescription
						>
					</Step>
				</li>
				<li class="relative pb-10">
					<Step number="6" isLast>
						<StepTitle>Ongoing Support & Success</StepTitle>
						<StepDescription
							>Our commitment to your project's success doesn't end with the launch. I provide
							ongoing support for further development, addressing any potential bugs, and ensuring
							smooth maintenance to guarantee a thriving digital presence.</StepDescription
						>
					</Step>
				</li>
			</ol>
		</div>
	</section>
	<section class="relative isolate" id="contact">
		<div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
			<div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
				<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
					<h1 class="text-3xl font-bold tracking-tight text-white">Get in touch</h1>
					<p class="mt-6 text-lg leading-8 text-gray-300">
						Thank you for considering reaching out! Your feedback, inquiries, and collaboration mean
						a lot to me. Please take a moment to share your thoughts or requirements via the contact
						form. Whether you have a project idea, want to discuss potential collaborations, or
						simply want to say hello, I'm here to listen and respond promptly. Your message is the
						first step towards creating something incredible together. Looking forward to hearing
						from you!
					</p>
					<dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
						<div class="flex gap-x-4">
							<dt class="flex-none">
								<span class="sr-only">Email</span>
								<svg
									class="h-7 w-6 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
							</dt>
							<dd>
								<a class="hover:text-white" href="mailto:hello@example.com">hello@example.com</a>
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
				<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label for="first-name" class="block text-sm font-semibold leading-6 text-white"
								>First name</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autocomplete="given-name"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="last-name" class="block text-sm font-semibold leading-6 text-white"
								>Last name</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autocomplete="family-name"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="email" class="block text-sm font-semibold leading-6 text-white"
								>Email</label
							>
							<div class="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autocomplete="email"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="message" class="block text-sm font-semibold leading-6 text-white"
								>Message</label
							>
							<div class="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows="8"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
					<div class="mt-8 flex justify-end">
						<button
							type="submit"
							class="inline-flex rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:outline active:outline-2 active:outline-offset-2 active::outline-white"
						>
							Send message
						</button>
					</div>
				</div>
			</form>
		</div>
	</section>
</main>
