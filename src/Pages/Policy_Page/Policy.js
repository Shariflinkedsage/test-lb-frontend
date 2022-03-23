import React, { useState } from "react";
import cx from "classnames";
import style from "./Policy.module.scss";

function Policy() {
  return (
    <div class={cx("row ", style.row)}>
      <div class={cx("card", style.row_card)}>
        <div class={cx("policyimage", style.row_policyimage)}>
          <img src="/policy_icon.png" alt="" width="200" height="160" />
        </div>
        Privacy And Policy
      </div>
      <div class="wt-reportdescription p-5">
        <div class="wt-title">
          <h3 id="Introduction">1. Introduction</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              1.2 LinkedSage grants you a non-exclusive, limited and revocable
              licence to use and access our websites (www.LinkedSage.com) and/or
              related services (together, the Website) subject to these Terms.
            </li>
            <li>
              1.1 These terms (Terms) form a legally binding contract between
              you and LinkedSage LIMITED. In these Terms, “us”, “we” and “our”
              refer to LinkedSage and references to “you”, “your”, “they” and
              “their” is to you, the user.
            </li>
            <li>
              1.3 If you have any questions, please contact our team via the
              Website or email (Support@LinkedSage.com).
            </li>
            <li>
              1.4 By browsing and using the Website, you accept and agree to be
              bound by these Terms. You agree that we may change, update or
              otherwise amend the Website and these Terms at our absolute
              discretion. We shall give notice of any changes on the Website.
            </li>
            <li>
              1.5 If you register to use the Website and/or engage with any
              Expert or Client on behalf of a company, you warrant and represent
              that you have the authority to bind that company.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3 id="Overview">2. Overview &amp; Application</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              2.1 We provide the Website to allow registered businesses and
              organizations (Clients) to identify, contact and engage with
              registered industry experts (Experts/Consultants) to provide
              consulting services (Works). Separate Terms &amp; Conditions apply
              to Experts and Clients respectively, and the performance of each
              Project is governed by a contract between the Expert and Client
              (Engagement(s)), which incorporates these Terms.
            </li>
            <li>
              2.2 We do not accept any responsibility or legal liability
              whatsoever for any act or omission of the Expert or the Client
              arising from or in connection with any Work or Engagement. While
              we may assist with the resolution of any complaint or dispute
              relating to any Engagement(s), you acknowledge that any legal
              recourse arising from or in connection with the Engagement(s),
              whether for breach of contract or otherwise, is against the Expert
              or Client (as applicable) and not against us, notwithstanding
              anything to the contrary in these Terms or on the Website.
            </li>
            <li>
              2.3 You must cooperate with us in adhering to these Terms and
              comply with all reasonable requirements, including requests for
              information and documents relating to the Engagement(s).
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3 id="User_Content">3. User Content</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              3.1 You acknowledge that we and other users rely on the accuracy
              and completeness of content and information provided during the
              registration process and otherwise on the Website. You warrant and
              represent that all information provided to us is accurate,
              complete and not misleading and remains so.
            </li>
            <li>
              3.2 We are not responsible for editing or monitoring such content
              or information. We provide no guarantee or warranty that such
              content or information is accurate, complete and not misleading.
              We reserve the right to require evidence to verify such
              information and to delete any such content and information in our
              absolute discretion.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>4. Conditions of Use</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              4.1 It is a condition of use that:
              <ol>
                <li>(a) You are over the age of 18;</li>
                <li>
                  (b) You have the authority to offer or undertake any
                  Engagement on behalf of your use our Website;
                </li>
                <li>
                  (c) You have authority to use the payment method used to make
                  payment for any Engagement;
                </li>
                <li>
                  (d) You register on the Website to offer or undertake any
                  Engagement;
                </li>
                <li>(e) You only use the Website for lawful purposes;</li>
                <li>
                  (f) You do not engage in any defamatory, improper, indecent or
                  offensive behavior;
                </li>
                <li>
                  (g) You are not breaking any local, state, national or
                  international law in your relevant jurisdiction by accessing
                  this Website;
                </li>
                <li>
                  (h) You will treat the Website and its users with respect and
                  will not partake in any conduct that could be considered
                  abusive, bullying, harassment, degradation, insulting or
                  otherwise contrary to social standards we adopt for the
                  Website;
                </li>
                <li>
                  (i) You must provide us with current, complete accurate
                  information in the course of your using the Website and to
                  maintain and update this information in a timely manner and to
                  ensure that such information is up to date prior to an
                  Engagement;
                </li>
                <li>
                  (j) You will only represent yourself and will not create false
                  aliases or impersonate any other person (with or without their
                  consent) while using the Website; and
                </li>
                <li>(k) You do not breach any of the Terms.</li>
              </ol>
            </li>
            <li>
              4.2 You agree not to undertake any of the following in connection
              with the Website or any associated user, host, infrastructure or
              network:
              <ol>
                <li>
                  (a) probe our website’s infrastructure, security or
                  authentication measures;
                </li>
                <li>
                  (b) intentionally distribute, transmit or relate harmful code
                  or virus (including spyware or malware), attempt to crash,
                  overload, hack, interfere with or make any non bona fide
                  communication, including overloading, flooding or spamming;
                </li>
                <li>
                  (c) send any unsolicited email or other communications,
                  including commercial promotions, junk mail, spam, chain
                  letters, pyramid schemes, or any other form of unauthorized
                  solicitation, hoaxing or phishing;
                </li>
                <li>
                  (d) use any robots or spiders to mine data or sell or modify
                  any of the content or reproduce, display, publicly perform,
                  distribute, or otherwise use any content in any way for any
                  public or commercial purpose.
                </li>
              </ol>
            </li>
            <li>
              4.3 You indemnify us for any loss or damage we suffer as a result
              of your breach of this clause.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>5. Access &amp; Availability</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              5.1 You may be required to register as a Client or Expert to
              access certain features or parts of the Website. We may accept,
              reject, suspend or remove access to the Website and registration
              of any user in our absolute discretion, for example where we are
              not satisfied with compliance with these Terms.
            </li>
            <li>
              5.2 If you are provided with a username and password to access the
              Website, it is your responsibility to keep your username and
              password secure and you indemnify us for any loss or damage we
              suffer as a result of unauthorised access to your account. You are
              solely responsible for the use of your account, irrespective of
              who it utilising it, whether with or without your permission.
            </li>
            <li>
              5.3 You agree to exercise reasonable care to maintain the security
              of your Logins and other account information (Account
              Information). You agree not to disclose your Account Information
              to anyone else and notify us promptly of any unauthorised use of
              your Account Information or any breach of security of which you
              become aware.
            </li>
            <li>
              5.4 You acknowledge that we are not required to keep the Website
              available for your use and we make no guarantees, implied or
              express, as to the ongoing availability of the Website, any Works
              or Engagement(s).
            </li>
            <li>
              5.5 We accept no responsibility for the unavailability of this
              Website, or any offer of Engagement(s) found on the Website, and
              you agree that we are not liable for any loss or damage that you
              or any other person incurs by not being able to access the
              Website.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>6. Intellectual Property</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              6.1 The Website and all related content is and remains the
              copyright and property of LinkedSage (including any source code,
              product recipes, usage data, ideas, enhancements, feature
              requests, suggestions or other information provided by the
              Customer or any Expert) and can be used for any purpose relating
              to the Website or our business. Without our express written
              permission, you shall not copy the Website for your own commercial
              purposes, including:
              <ol>
                <li>
                  (a) Replicate or use the details and profiles of any Expert;
                </li>
                <li>(b) Replicate all or part of the Website in anyway; or</li>
                <li>
                  (c) Incorporate all or part of the Website in any other
                  webpage, Website, platform, application or other digital or
                  non-digital format.
                </li>
              </ol>
            </li>
            <li>
              6.2 We have moral &amp; registered rights in its trademarks and
              you shall not copy, alter, use or otherwise deal in the marks
              without our prior written consent.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>7. Confidentiality</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              7.1 You must maintain in confidence and use only for the purposes
              of using the Website or completing any Engagement, all
              confidential information disclosed by us or other users. In
              particular, Experts must not disclose information that is
              identified by any Client as subject to confidentiality
              obligations. You must notify us immediately upon becoming aware of
              a suspected or actual breach of this obligation.
            </li>
            <li>
              7.2 Where legally required to disclose confidential information
              that belongs to us or another user, you must inform that party of
              the requirement and liaise with that party prior to disclosing any
              confidential information (wherever practicable).
            </li>
            <li>
              7.3 For the purposes of this clause, confidential information
              includes any documents or information created, received or
              obtained by the Expert from or on behalf of the Client, us or any
              other party in respect of any Engagement; all non-public
              information pertaining to any business must remain strictly
              confidential (including the identity of our Clients, the Statement
              of Work, the nature of and reasons for Client inquiries, and any
              content marked confidential).
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>8. Third Party Platform &amp; Advertising</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              8.1 The Website may from time-to-time contain information and
              advertising from third parties (Third Parties). You consent to
              receiving this information as part of your use of the Website.
            </li>
            <li>
              8.2 We are not responsible for any information transmitted by
              Third Parties or liable for any reliance you make upon the
              information or statements conveyed by Third Parties (or in
              relation to your dealings with Third Parties), nor are we
              responsible for the accuracy of any advertisements.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>9. Limitation of Liability &amp; Disclaimer of Warranties</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              9.1 You agree that you use the Website at your own risk. We do not
              control or vet user generated content for accuracy, nor do we have
              any obligation to monitor the use of our Website or verify the
              identity of our users. To the fullest extent permissible under
              applicable law, we disclaim any and all warranties of any kind,
              express or implied, including, without limitation, any implied
              warranties of merchantability, fitness for a particular purpose,
              accuracy, title or non-infringement.
            </li>
            <li>
              9.2 You acknowledge that we are not responsible for the conduct or
              activities of any Client or Expert.
            </li>
            <li>
              9.3 You acknowledge that in using the Website and in relation to
              the undertaking of any Engagement(s) you do not rely on any
              statement, representation, assurance or warranty (whether made
              innocently or negligently) that is not set out in these Terms.
            </li>
            <li>
              9.4 We do not guarantee that your use of our Website will be
              error-free, uninterrupted, safe from viruses or other harmful
              elements or that our Website is completely secure.
            </li>
            <li>
              9.5 In no circumstances will we be liable for any direct,
              incidental, consequential or indirect damages, loss or corruption
              of data, loss of profits, goodwill, bargain or opportunity, loss
              of anticipated savings or any other similar or analogous loss
              resulting from your access to, or use of, or inability to use the
              Website or any content, or in any way relating to any
              Engagement(s), whether based on warranty, contract, tort,
              negligence, in equity or any other legal theory, and whether or
              not we knew or should have known of the possibility of such
              damage, to business interruption of any type, whether in tort,
              contract or otherwise.
            </li>
            <li>
              9.6 In all circumstances, you agree that our liability (if any)
              shall not exceed the lesser of the value of the Website Fees paid
              and 1,000 BDT.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>10. Indemnity</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              10.1 You agree to indemnify us from and against any loss, damage,
              cost or expense that we may suffer or incur as a result of or in
              connection with your use of the Website (and by each of your
              employees, officers, agents, contractors and representatives),
              including:
              <ol>
                <li>
                  (a) the Work and any Engagement (including any Scope of Work,
                  Special Conditions and variations);
                </li>
                <li>
                  (b) any information or documents provided by any user
                  (including profile information and all related services, work
                  product, deliverables or other materials);
                </li>
                <li>(c) any breach by you of these Terms;</li>
                <li>
                  (d) any breach or alleged beach of third party intellectual
                  property rights;
                </li>
                <li>
                  (e) any wilful act or omission, fraud, dishonesty, fraudulent
                  misrepresentation, negligence.
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>11. Privacy Policy</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              11.1 You accept our Privacy Policy and agree that you will not do
              anything that shall compromise our compliance with the Privacy
              Policy nor do anything contrary to the Privacy Policy insofar as
              your use of the Website is concerned.
            </li>
            <li>
              11.2 We may amend the Privacy Policy from time-to-time without
              notice and at our absolute discretion, and by continuing to use
              the Website you accept such changes.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>12. Terminations</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              12.1 We may end the agreement formed by the Terms immediately by
              giving you written notice. It is not essential for us to provide
              reasons for the termination. Where these Terms have been
              terminated you must immediately cease using the Website.
            </li>
            <li>
              12.2 Experts may terminate their use of the Website by the
              procedure specified on our Website, subject to completion of all
              Engagements in accordance with these Terms.
            </li>
            <li>
              12.3 Your use of the Website may be cancelled at any time, for any
              reason, on a temporary or permanent basis. You must immediately
              cease using the Website should you receive a notice cancelling
              your licence to use the Website.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>13. Notices</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              13.1 You can contact our customer service team by email
              (hello@LinkedSage.com).
            </li>
            <li>
              13.2 We may collect feedback in connection with your use of the
              Website to improve functionality and performance of the Website.
              In accordance with our Privacy Policy, we shall only publish
              anonymous feedback publicly, unless you approve otherwise.
            </li>
            <li>
              13.3 You can direct notices, enquiries, complaints and so forth to
              Us using any other details published on the Website. We will
              notify you of a change of details from time-to-time by publishing
              new details on the Website.
            </li>
            <li>
              13.4 We will send you notices and other correspondence to the
              email address that you submit to the Website, or that you notify
              us of from time-to-time. It is your responsibility to update your
              contact details as they change.
            </li>
          </ol>
        </div>
        <div class="wt-title">
          <h3>14. General</h3>
        </div>
        <div class="wt-description">
          <ol>
            <li>
              14.1 We may assign or otherwise create any interest in their
              rights under these Terms by giving you written notice.
            </li>
            <li>
              14.2 Any provision of these Terms, which is invalid or
              unenforceable in any jurisdiction, is, as to that jurisdiction,
              ineffective to the extent of the invalidity or unenforceability
              without affecting the remaining provisions of these Terms or
              affecting the validity or enforceability of that provision in any
              other jurisdiction. The parties will negotiate in good faith to
              replace any such provision with a provision which is valid and
              enforceable and consistent with the intention of these Terms, so
              far as is reasonably practicable.
            </li>
            <li>
              14.3 These Terms form part of an ecommerce transaction and the
              parties agree that these Terms shall be accepted electronically
              and agreement to these Terms is formed and validly entered into
              electronically upon you successfully joining our Website as a
              Expert or Client.
            </li>
            <li>
              14.4 The termination of these Terms will not affect the parties’
              rights in respect of periods before the termination of these
              Terms.
            </li>
            <li>
              14.5 These Terms are governed by the laws of England &amp; Wales
              and you submit to the non-exclusive jurisdiction of the courts in
              England.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Policy;
