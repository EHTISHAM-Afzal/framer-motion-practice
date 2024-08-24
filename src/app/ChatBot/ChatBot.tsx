"use client";

import React from "react";

export const ChatBot = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white border border-solid border-[#939393] w-[960px] h-[1080px]">
        <div className="relative h-[1080px]">
          <div className="flex flex-col w-[920px] h-[548px] items-start gap-4 absolute top-[512px] left-5 overflow-hidden">
            <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-end gap-[7px] relative flex-[0_0_auto]">
                <img className="relative w-10 h-10" alt="Frame" src="frame-35.png" />
                <div className="inline-flex flex-col items-start justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="inline-flex justify-center gap-2.5 pt-[18px] pb-5 px-5 bg-zinc-900 rounded-[12px_12px_12px_0px] shadow-[0px_4px_24px_#00000008] items-center relative flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-sky-50 text-xl tracking-[0] leading-8 whitespace-nowrap">
                      Welcome to chatbot.co, how can I help you?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Frame" src="frame-43-3.svg" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#343434] text-xs text-right tracking-[0] leading-[normal]">
                  09.12PM
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-blue-500 inline-flex items-center justify-center gap-2.5 px-[22px] py-[18px] relative flex-[0_0_auto] rounded-[12px_12px_0px_12px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                    how to deploy webapp into vercel
                  </p>
                </div>
                <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#343434] text-xs text-right tracking-[0] leading-[normal]">
                  09.10PM
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[550px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-end gap-[7px] relative flex-[0_0_auto] mr-[-207.00px]">
                <img className="relative w-10 h-10 mt-[-1833.00px] mr-[-5551.00px]" alt="Frame" src="image.png" />
                <div className="inline-flex flex-col items-start justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="inline-flex justify-center gap-2.5 pt-[18px] pb-5 px-5 bg-neutral-900 rounded-[12px_12px_12px_0px] shadow-[0px_4px_24px_#00000008] items-center relative flex-[0_0_auto]">
                    <p className="relative w-[670px] mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-transparent text-lg tracking-[0] leading-[18px]">
                      <span className="text-sky-50 leading-[0.1px]">
                        Deploying a web app to Vercel is straightforward. Here’s a step-by-step guide to help you:
                        <br />
                      </span>
                      <span className="[font-family:'Arial-Bold',Helvetica] font-bold text-sky-50 text-[25px] leading-[0.1px]">
                        1. Set Up Your Project
                        <br />
                      </span>
                      <span className="[font-family:'Arial-Bold',Helvetica] font-bold text-sky-50 leading-[0.1px]">
                        Ensure your project is version-controlled using Git.
                        <br />
                        Make sure your project is a compatible framework (e.g., Next.js, React, Vue, etc.) or a static
                        site.
                        <br />
                      </span>
                      <span className="[font-family:'Arial-Bold',Helvetica] font-bold text-sky-50 text-[25px] leading-10">
                        2. Install Vercel CLI (Optional)
                        <br />
                      </span>
                      <span className="text-sky-50 leading-[0.1px]">
                        You can deploy directly from the Vercel website, but the Vercel CLI gives you more control.
                        <br />
                        Install it using npm:npm install -g vercel
                        <br />
                        3. Deploy from the Vercel Dashboard
                        <br />
                        Go to{" "}
                      </span>
                      <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">
                        <span className="text-sky-50 leading-[0.1px] underline">Vercel&#39;s website</span>
                      </a>
                      <span className="text-sky-50 leading-[0.1px]">
                        {" "}
                        and log in or sign up.
                        <br />
                        Click on the &#34;New Project&#34; button.
                        <br />
                        Import your Git repository (from GitHub, GitLab, or Bitbucket).
                        <br />
                        Configure your project settings (build command, output directory, etc.). Vercel usually detects
                        these settings automatically.
                        <br />
                        Click &#34;Deploy.&#34;
                        <br />
                        4. Deploy Using Vercel CLI
                        <br />
                        Navigate to your project directory:cd your-project-directory
                        <br />
                        Run the following command:vercel
                        <br />
                        Follow the prompts to link your project to a Vercel account and set up deployment
                        configurations.
                        <br />
                        Once completed, Vercel will build and deploy your project. You&#39;ll receive a live URL.
                        <br />
                        5. Environment Variables (Optional)
                        <br />
                        If your project requires environment variables, you can set them up in the Vercel dashboard
                        under the &#34;Environment Variables&#34; section or by using the CLI:vercel env add
                        <br />
                        6. Custom Domain (Optional)
                        <br />
                        You can add a custom domain by going to your project in the Vercel dashboard, navigating to the
                        &#34;Domains&#34; tab, and adding a domain.
                        <br />
                        7. Continuous Deployment
                        <br />
                        Vercel automatically sets up continuous deployment, meaning every push to your main branch will
                        trigger a new deployment.
                        <br />
                        That&#39;s it! Your web app should now be live on Vercel. If you run into any issues,
                        Vercel&#39;s documentation and community support are great resources.-
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto] mt-[-2782.00px] mr-[-5818.00px]"
                  alt="Frame"
                  src="frame-43-2.svg"
                />
                <div className="text-[#7f7f7f] relative w-fit mt-[-1.00px] ml-[-5867px] [font-family:'Inter-Medium',Helvetica] font-medium text-xs text-right tracking-[0] leading-[normal]">
                  09.12PM
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[254px] items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="bg-[#3f5dab] inline-flex items-center justify-center gap-2.5 px-[22px] py-[18px] relative flex-[0_0_auto] rounded-[12px_12px_0px_12px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    The standard chunk of Lorem
                  </p>
                </div>
                <div className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-[#7f7f7f] text-xs text-right tracking-[0] leading-[normal]">
                  09.15PM
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[550px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="flex items-end gap-[7px] relative self-stretch w-full flex-[0_0_auto]">
                <img className="relative w-10 h-10 mt-[-2926.00px] mr-[-5758.00px]" alt="Frame" src="frame-24.svg" />
                <div className="gap-3.5 flex flex-col items-start justify-center relative flex-1 grow">
                  <div className="flex items-center justify-center gap-2.5 pt-[18px] pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[12px_12px_12px_0px] shadow-[0px_4px_24px_#00000005]">
                    <div className="flex flex-col items-start gap-5 relative flex-1 grow">
                      <p className="relative self-stretch mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-[25.6px]">
                        Designing a chatbot UI involves considering both the visual and functional aspects to ensure it
                        is user-friendly, engaging, and efficient. Here are some key elements to consider for an
                        effective chatbot UI design:
                      </p>
                      <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Arial-BoldMT',Helvetica] font-bold text-[#343434] text-lg tracking-[0] leading-[28.8px]">
                            1. Layout and Structure
                          </div>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-4">
                            <span className="font-bold leading-6">Clean and Simple Interface:</span>
                            <span className="[font-family:'Arial-Regular',Helvetica] leading-6">
                              {" "}
                              Avoid clutter. Keep the design minimalistic to help users focus on the conversation.
                            </span>
                          </p>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-6">
                            <span className="font-bold">Fixed Input Area: </span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              Place the text input area at the bottom of the screen, making it easily accessible.
                            </span>
                          </p>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-6">
                            <span className="font-bold">Visible Chat History:</span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              {" "}
                              Display previous messages in a scrollable area above the input field.
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Arial-BoldMT',Helvetica] font-bold text-[#343434] text-lg tracking-[0] leading-[28.8px]">
                            3. User Input Options
                          </div>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-6">
                            <span className="font-bold">Text Input: </span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              Provide a straightforward text box for user input.
                            </span>
                          </p>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-6">
                            <span className="font-bold">Quick Replies: </span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              Offer pre-defined quick reply buttons to help users respond quickly without typing.
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Arial-BoldMT',Helvetica] font-bold text-[#343434] text-lg tracking-[0] leading-[28.8px]">
                            4. Interactive Elements
                          </div>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-6">
                            <span className="font-bold">Buttons and Cards: </span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              Use buttons for common actions and cards to display structured information like products,
                              services, or options.
                            </span>
                          </p>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-6">
                            <span className="font-bold">Emoji and GIF Support: </span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              Enhance engagement by allowing users to send emojis and GIFs.
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Arial-BoldMT',Helvetica] font-bold text-[#343434] text-lg tracking-[0] leading-[28.8px]">
                            Example Mockup
                          </div>
                          <div className="relative self-stretch w-full h-[251px] bg-[#626262] rounded-[10px] overflow-hidden">
                            <div className="relative w-[472px] h-[355px] top-[-3644px] left-[6201px] bg-[url(/unsplash-4ugmm3wruoq.png)] bg-cover bg-[50%_50%]">
                              <img className="absolute w-[49px] h-[49px] top-0 left-0" alt="Frame" src="image.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto] mt-[-3925.00px] mr-[-5818.00px]"
                  alt="Frame"
                  src="frame-43.svg"
                />
                <div className="text-[#9cb2d1] relative w-fit mt-[-1.00px] ml-[-5867px] [font-family:'Inter-Medium',Helvetica] font-medium text-xs text-right tracking-[0] leading-[normal]">
                  09.12PM
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[423px] items-end gap-2 relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 px-[22px] py-[18px] relative flex-[0_0_auto] bg-[#4f6db9] rounded-[12px_12px_0px_12px]">
                  <p className="relative w-[367px] mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px]">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  </p>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 px-[22px] py-[18px] relative flex-[0_0_auto] bg-[#4f6db9] rounded-[12px_12px_0px_12px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    The standard chunk of Lorem Ipsum?
                  </p>
                </div>
                <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#9cb2d1] text-xs tracking-[0] leading-[normal]">
                  09.30PM
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[550px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="flex items-end gap-[7px] relative self-stretch w-full flex-[0_0_auto]">
                <img className="relative w-10 h-10 mt-[-4163.00px] mr-[-5758.00px]" alt="Frame" src="frame-24.svg" />
                <div className="gap-2.5 flex flex-col items-start justify-center relative flex-1 grow">
                  <div className="flex items-center justify-center gap-2.5 pt-[18px] pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[12px_12px_12px_0px] shadow-[0px_4px_24px_#00000005]">
                    <div className="flex flex-col items-start gap-5 relative flex-1 grow">
                      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-[25.6px]">
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration in some form, by injected humour, or randomised words’
                        </p>
                        <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-[25.6px]">
                          <span className="font-bold">Multi-Platform Support: </span>
                          <span className="[font-family:'Arial-Regular',Helvetica]">
                            Ensure the chatbot is accessible across different devices and platforms (web, mobile, etc.).
                          </span>
                        </p>
                        <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-[25.6px]">
                          <span className="font-bold">Push Notifications: </span>
                          <span className="[font-family:'Arial-Regular',Helvetica]">
                            Implement notifications for important updates or responses when the user is not actively
                            using the chatbot.
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Arial-BoldMT',Helvetica] font-bold text-[#343434] text-lg tracking-[0] leading-[28.8px]">
                            Testing and Analytics
                          </div>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-[25.6px]">
                            <span className="font-bold">User Testing: </span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              Conduct usability testing to gather feedback and make improvements.
                            </span>
                          </p>
                          <p className="relative self-stretch [font-family:'Arial-Bold',Helvetica] font-normal text-[#343434] text-base tracking-[0] leading-[25.6px]">
                            <span className="font-bold">Analytics: </span>
                            <span className="[font-family:'Arial-Regular',Helvetica]">
                              Track usage patterns, common issues, and user satisfaction to continually refine the
                              chatbot experience.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto] mt-[-4604.00px] mr-[-5818.00px]"
                  alt="Frame"
                  src="frame-43-4.svg"
                />
                <div className="relative w-fit mt-[-1.00px] ml-[-5870px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#9cb2d1] text-xs text-right tracking-[0] leading-[normal]">
                  09.52PM
                </div>
              </div>
            </div>
          </div>
          <img className="absolute w-[891px] h-[744px] top-0 left-[34px]" alt="Ellipse" src="ellipse-6.png" />
          <div className="flex flex-col w-[960px] items-start gap-2.5 p-5 absolute top-[966px] left-0">
            <div className="flex items-center justify-between pl-8 pr-4 py-4 relative self-stretch w-full flex-[0_0_auto] bg-zinc-900 rounded-[999px] border border-solid border-[#7e8081] shadow-[8px_0px_40px_#0000000d]">
              <div className="flex w-[410px] items-center gap-[17px] relative">
                <img className="relative w-6 h-6" alt="Teenyicons attach" src="teenyicons-attach-outline.svg" />
                <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#b6b6b6] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Type your message here...
                </div>
              </div>
              <img className="relative flex-[0_0_auto]" alt="Frame" src="frame-85.svg" />
            </div>
          </div>
          <div className="flex flex-col w-[960px] items-start absolute top-0 left-0 shadow-[0px_3px_8.7px_#0000000d]">
            <img className="relative self-stretch w-full flex-[0_0_auto]" alt="Frame" src="frame-22.svg" />
            <div className="flex justify-between p-5 self-stretch w-full bg-white border-b [border-bottom-style:solid] border-[#bab6b6] items-center relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[18px] relative flex-[0_0_auto]">
                <img className="relative w-[60px] h-[60px]" alt="Frame" src="frame-24.png" />
                <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Arial-BoldMT',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                    ChatBot
                  </div>
                  <div className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-[#757171] text-sm tracking-[0] leading-[normal]">
                    Powered by AI
                  </div>
                </div>
              </div>
              <div className="flex w-[440.5px] items-center justify-end gap-[30px] relative">
                <img className="relative w-6 h-6" alt="Icon moon" src="moon.svg" />
                <div className="relative w-6 h-6">
                  <div className="relative w-[3px] h-[22px] top-px left-2.5">
                    <div className="absolute w-[3px] h-[3px] top-0 left-0 bg-black rounded-[1.5px/1.57px]" />
                    <div className="absolute w-[3px] h-[3px] top-[9px] left-0 bg-black rounded-[1.5px/1.57px]" />
                    <div className="absolute w-[3px] h-[3px] top-[19px] left-0 bg-black rounded-[1.5px/1.57px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[920px] items-center gap-[60px] absolute top-[204px] left-5">
            <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
              <img className="relative w-[140px] h-[140px]" alt="Frame" src="frame-21.png" />
              <div className="inline-flex flex-col items-center gap-[13px] relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Arial-BoldMT',Helvetica] font-bold text-[#131313] text-4xl text-center tracking-[0] leading-[normal]">
                  Chatbot
                </div>
                <p className="relative w-fit [font-family:'Arial-Regular',Helvetica] font-normal text-[#616161] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                  Our virtual assistant is here to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
