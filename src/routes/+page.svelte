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
						href="/#hire-me"
						class="rounded-md font-bold hover:bg-gradient-to-bl bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] text-lg px-3.5 py-2.5 text-white active:outline active:outline-2 active:outline-offset-2 active:outline-white-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-current focus-visible:outline-white"
						>Hire me</a
					>
				</div>
			</div>
		</div>
	</section>
	<section
		class="flex flex-col sm:flex-row gap-12 text-gray-100 max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-32"
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
	<section class="px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center">
		<header class="mx-auto max-w-2xl text-center mb-16">
			<p class="text-base font-semibold leading-7 text-emerald-500">How it works</p>
			<h2 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
				From idea to launch
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-100">
				Diving into the layers of web development, detailing each step that nurtures your idea into
				the reality of an engaging, functional website Launch.
			</p>
		</header>
		<div aria-label="Progress" class="max-w-2xl">
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
</main>
