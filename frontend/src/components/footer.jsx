import {
  Footer,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  FooterCopyright,
  FooterIcon,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const footer = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Bhargav's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" className="text-lg" />
              <FooterLinkGroup col>
                <FooterLink
                  className="text-md"
                  href="https://www.100jsprojects.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projects
                </FooterLink>
                <FooterLink
                  className="text-md"
                  href="/About"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bhargav's Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Us" className="text-lg" />
              <FooterLinkGroup col>
                <FooterLink
                  className="text-md"
                  href="https://github.com/munnavuyyuru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FooterLink>
                <FooterLink className="text-md" href="#">
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className="text-lg" />
              <FooterLinkGroup col>
                <FooterLink className="text-md" href="#">
                  Privacy Policy
                </FooterLink>
                <FooterLink className="text-md" href="#">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Bhargav's blog"
            year={new Date().getFullYear()}
            className="text-md"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon
              href="https://github.com/munnavuyyuru"
              target="_Blank"
              icon={BsGithub}
            />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default footer;
