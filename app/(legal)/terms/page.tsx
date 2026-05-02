import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Boost Staff",
  description: "Terms and conditions for using the Boost Staff platform.",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms &amp; Conditions</h1>

      <p>Welcome to Boost Staff!</p>
      <p>
        These terms and conditions outline the rules and regulations for the use
        of Boost Staff.io&rsquo;s website. By accessing this website, we assume
        you accept these terms and conditions. Do not continue to use
        booststaff.io if you do not agree to take all of the terms and
        conditions stated on this page.
      </p>

      <h2>Cookies</h2>
      <p>
        The website uses cookies to help personalize your online experience. By
        accessing booststaff.io, you agreed to use the required cookies.
      </p>
      <p>
        A cookie is a text file that is placed on your hard disk by a web page
        server. Cookies cannot be used to run programs or deliver viruses to
        your computer. Cookies are uniquely assigned to you and can only be read
        by a web server in the domain that issued the cookie to you.
      </p>
      <p>
        We may use cookies to collect, store, and track information for
        statistical or marketing purposes to operate our website. You have the
        ability to accept or decline optional cookies. There are some required
        cookies that are necessary for the operation of our website. Please keep
        in mind that by accepting required cookies, you also accept third-party
        cookies, which might be used via third-party provided services if you
        use such services on our website.
      </p>

      <h2>License</h2>
      <p>
        Unless otherwise stated, Boost Staff LLC and/or its licensors own the
        intellectual property rights for all material on booststaff.io. All
        intellectual property rights are reserved. You may access this from
        booststaff.io for your own personal use subjected to restrictions set in
        these terms and conditions.
      </p>
      <p>You must not:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Copy or republish material from booststaff.io</li>
        <li>Sell, rent, or sub-license material from booststaff.io</li>
        <li>Reproduce, duplicate or copy material from booststaff.io</li>
        <li>Redistribute content from booststaff.io</li>
      </ul>
      <p>This Agreement shall begin on the date hereof.</p>
      <p>
        Parts of this website offer users an opportunity to post and exchange
        opinions and information in certain areas of the website. Boost Staff
        LLC does not filter, edit, publish or review comments before their
        presence on the website. Comments do not reflect the views and opinions
        of Boost Staff LLC, its agents, and/or affiliates. To the extent
        permitted by applicable laws, Boost Staff LLC shall not be liable for
        the comments or any liability, damages, or expenses caused and/or
        suffered as a result of any use of and/or posting of and/or appearance
        of the comments on this website.
      </p>
      <p>
        Boost Staff LLC reserves the right to monitor all comments and to remove
        any comments considered inappropriate, offensive, or in breach of these
        Terms and Conditions.
      </p>

      <h2>You Warrant and Represent That</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          You are entitled to post the comments on our website and have all
          necessary licenses and consents to do so.
        </li>
        <li>
          The comments do not invade any intellectual property right, including
          without limitation copyright, patent, or trademark of any third party.
        </li>
        <li>
          The comments do not contain any defamatory, libelous, offensive,
          indecent, or otherwise unlawful material.
        </li>
        <li>
          The comments will not be used to solicit or promote business or present
          commercial or unlawful activity.
        </li>
      </ul>
      <p>
        You hereby grant Boost Staff LLC a non-exclusive license to use,
        reproduce, edit and authorize others to use, reproduce and edit any of
        your comments in any and all forms, formats, or media.
      </p>

      <h2>Hyperlinking to Our Content</h2>
      <p>
        The following organizations may link to our website without prior
        written approval: government agencies; search engines; news
        organizations; online directory distributors; and system-wide accredited
        businesses.
      </p>
      <p>
        These organizations may link to our home page so long as the link is not
        deceptive, does not falsely imply sponsorship or endorsement, and fits
        within the context of the linking party&rsquo;s site.
      </p>
      <p>
        If you are interested in linking to our website, send an e-mail to Boost
        Staff LLC with your name, organization name, contact information, and the
        URLs involved. Allow 2&ndash;3 weeks for a response.
      </p>
      <p>
        No use of Boost Staff&rsquo;s logo or other artwork will be allowed for
        linking absent a trademark license agreement.
      </p>

      <h2>Content Liability</h2>
      <p>
        We shall not be held responsible for any content that appears on your
        website. You agree to protect and defend us against all claims raised on
        your website. No links should appear on any website that may be
        interpreted as libelous, obscene, or criminal, or which infringes any
        third-party rights.
      </p>

      <h2>Reservation of Rights</h2>
      <p>
        We reserve the right to request that you remove all links or any
        particular link to our website. We also reserve the right to amend these
        terms and conditions at any time. By continuously linking to our
        website, you agree to be bound by these linking terms and conditions.
      </p>

      <h2>Removal of Links from Our Website</h2>
      <p>
        If you find any link on our website that is offensive for any reason,
        you are free to contact and inform us at any moment. We will consider
        requests to remove links but are not obligated to do so or to respond
        directly.
      </p>
      <p>
        We do not warrant that the information on this website is correct,
        complete, or accurate, nor do we promise to ensure the website remains
        available or that material is kept up to date.
      </p>

      <h2>Disclaimer</h2>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties, and conditions relating to our website and
        its use. Nothing in this disclaimer will limit or exclude liability for
        death or personal injury, fraud or fraudulent misrepresentation, or any
        liability that cannot be excluded under applicable law.
      </p>
      <p>
        As long as the website and its information and services are provided
        free of charge, we will not be liable for any loss or damage of any
        nature.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Questions? Email{" "}
        <a href="mailto:legal@booststaff.io">legal@booststaff.io</a>.
      </p>
    </>
  );
}
