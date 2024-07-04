import React from 'react';
import "./question.css"
import Container from './../../Shared-componets/Container/Container';
    import {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
    } from "@headlessui/react";

import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";

const Question = () => {
    return (
      <Container>
        <section className='-my-24'>
          <div className="title">
            <button className="border border-[#343268] rounded-full px-6 py-1">
              Feq
            </button>
            <h1>Frequntly Asked Question</h1>
          </div>

          <div className="h-screen question w-full">
            <div className="sub_title ">
              <h2> What are your office hours?</h2> <hr />
              <p>
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
            {/* div 1 */}
            <div className="mx-auto w-full  ">
              <Disclosure as="div"  defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium ">
                    How can I schedule an appointment?
                  </span>

                  <FiArrowUp className="size-5  group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 ">
                  Our office hours vary by location, but typically we are open
                  Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                  may offer extended hours or weekend appointments. Please
                  contact your nearest clinic for specific hours.
                </DisclosurePanel>
              </Disclosure>
            </div>
            {/* div 2 */}
            <div className="mx-auto w-full   ">
              <Disclosure as="div"  defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium ">
                    Do you accept insurance?
                  </span>

                  <FiArrowUp className="size-5  group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 ">
                  Our office hours vary by location, but typically we are open
                  Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                  may offer extended hours or weekend appointments. Please
                  contact your nearest clinic for specific hours.
                </DisclosurePanel>
              </Disclosure>
            </div>
            {/* div 3 */}
            <div className="mx-auto w-full  ">
              <Disclosure as="div"  defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium ">
                    What should I bring to my appointment?
                  </span>

                  <FiArrowUp className="size-5  group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 ">
                  Our office hours vary by location, but typically we are open
                  Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                  may offer extended hours or weekend appointments. Please
                  contact your nearest clinic for specific hours.
                </DisclosurePanel>
              </Disclosure>
            </div>
            {/* div 4 */}
            <div className="mx-auto w-full   ">
              <Disclosure as="div"  defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium ">
                    Do you offer telemedicine appointments?
                  </span>

                  <FiArrowUp className="size-5  group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 ">
                  Our office hours vary by location, but typically we are open
                  Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                  may offer extended hours or weekend appointments. Please
                  contact your nearest clinic for specific hours.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </section>
      </Container>
    );
};

export default Question;