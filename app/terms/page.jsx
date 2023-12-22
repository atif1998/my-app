import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function TermsPage() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <div
        style={{
          width: "16%",
          display: "flex",
          background: "linear-gradient(to top left, #081623, #355572)",
          flexDirection: "column", // Adjust the direction to column
          height: "100%", // Make the gradient cover the entire height
          overflow: "auto", // Enable scrolling for the gradient
        }}
      ></div>
      <div style={{ width: "84%", height: "100vh" }}>
        <div className="p-5">
          <div>
            <Link href={"/"}>
              <FaArrowLeft />
            </Link>

            <div>
              <Link href={"/"}>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "17px",
                    color: "#19151C",
                    marginTop: "10px",
                  }}
                >
                  Go back
                </p>
              </Link>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#19151C",
                  marginTop: "5px",
                }}
              >
                Terms of use
              </p>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "14.6px",
                  color: "#1D374E",
                  marginBottom: "5px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Commodo amet convallis
                placerat duis.
              </p>
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#1D374E",
                marginBottom: "5px",
              }}
            >
              1. Lorem ipsum dolor sit amet consectetur.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: "5px",
              }}
            >
              1.1 Lorem ipsum dolor sit amet consectetur. Sapien aliquam nec
              varius urna dis arcu velit. Scelerisque urna turpis ac vel at quis
              eget. Eget leo non nec faucibus lobortis tellus. Morbi adipiscing
              aenean volutpat faucibus orci arcu id.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: "5px",
              }}
            >
              Cum aenean eros eget faucibus. Lacus nulla suscipit ut ac
              pharetra. Magna at et elementum eros in amet dictum. Elit faucibus
              duis accumsan dui at nec. Semper euismod sed velit non varius
              mattis sit. Ornare viverra congue ultricies risus interdum
              maecenas amet aliquet nec. Ut dignissim consequat morbi in eget
              pellentesque risus lorem quis. Fusce feugiat dolor justo
              scelerisque erat. Fames congue et condimentum nunc vulputate purus
              leo. Cum sed ornare semper varius a. Aenean commodo amet dui
              aliquam tortor. Fringilla felis vel ac aliquet.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: "5px",
              }}
            >
              Quis est dictum dolor volutpat bibendum augue elit sem sagittis.
              Platea et mi congue ultricies habitant. Dapibus non risus sapien
              euismod. Nibh eu nisl odio eleifend in scelerisque neque enim
              auctor. Neque pellentesque ullamcorper nisi dolor. Cras vitae
              mauris cursus sollicitudin eu odio. Quam bibendum ut mattis
              faucibus hac. Eu quis tincidunt scelerisque viverra. Amet sit sed
              vitae proin rhoncus curabitur. Arcu nulla eget eget aliquet et. Eu
              odio neque velit platea. Aliquet malesuada nisl in enim vitae sit
              a mus aliquam.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              1.2 Lorem ipsum dolor sit amet consectetur. Sapien aliquam nec
              varius urna dis arcu velit. Scelerisque urna turpis ac vel at quis
              eget. Eget leo non nec faucibus lobortis tellus. Morbi adipiscing
              aenean volutpat faucibus orci arcu id. Cum aenean eros eget
              faucibus. Lacus nulla suscipit ut ac pharetra. Magna at et
              elementum eros in amet dictum. Elit faucibus duis accumsan dui at
              nec. Semper euismod sed velit non varius mattis sit. Ornare
              viverra congue ultricies risus interdum maecenas amet aliquet nec.
              Ut dignissim consequat morbi in eget pellentesque risus lorem
              quis. Fusce feugiat dolor justo scelerisque erat. Fames congue et
              condimentum nunc vulputate purus leo. Cum sed ornare semper varius
              a. Aenean commodo amet dui aliquam tortor. Fringilla felis vel ac
              aliquet.
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#1D374E",
                marginBottom: "5px",
              }}
            >
              1. Lorem ipsum dolor sit amet consectetur.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: "5px",
              }}
            >
              2.1 Lorem ipsum dolor sit amet consectetur. Sapien aliquam nec
              varius urna dis arcu velit. Scelerisque urna turpis ac vel at quis
              eget. Eget leo non nec faucibus lobortis tellus. Morbi adipiscing
              aenean volutpat faucibus orci arcu id. Cum aenean eros eget
              faucibus. Lacus nulla suscipit ut ac pharetra. Magna at et
              elementum eros in amet dictum. Elit faucibus duis accumsan dui at
              nec. Semper euismod sed velit non varius mattis sit. Ornare
              viverra congue ultricies risus interdum maecenas amet aliquet nec.
              Ut dignissim consequat morbi in eget pellentesque risus lorem
              quis. Fusce feugiat dolor justo scelerisque erat. Fames congue et
              condimentum nunc vulputate purus leo. Cum sed ornare semper varius
              a. Aenean commodo amet dui aliquam tortor. Fringilla felis vel ac
              aliquet. Quis est dictum dolor volutpat bibendum augue elit sem
              sagittis. Platea et mi congue ultricies habitant. Dapibus non
              risus sapien euismod. Nibh eu nisl odio eleifend in scelerisque
              neque enim auctor. Neque pellentesque ullamcorper nisi dolor. Cras
              vitae mauris cursus sollicitudin eu odio. Quam bibendum ut mattis
              faucibus hac. Eu quis tincidunt scelerisque viverra. Amet sit sed
              vitae proin rhoncus curabitur. Arcu nulla eget eget aliquet et. Eu
              odio neque velit platea. Aliquet malesuada nisl in enim vitae sit
              a mus aliquam.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: "5px",
              }}
            >
              2.2 Lorem ipsum dolor sit amet consectetur. Sapien aliquam nec
              varius urna dis arcu velit. Scelerisque urna turpis ac vel at quis
              eget. Eget leo non nec faucibus lobortis tellus. Morbi adipiscing
              aenean volutpat faucibus orci arcu id. Cum aenean eros eget
              faucibus. Lacus nulla suscipit ut ac pharetra. Magna at et
              elementum eros in amet dictum. Elit faucibus duis accumsan dui at
              nec. Semper euismod sed velit non varius mattis sit. Ornare
              viverra congue ultricies risus interdum maecenas amet aliquet nec.
              Ut dignissim consequat morbi in eget pellentesque risus lorem
              quis. Fusce feugiat dolor justo scelerisque erat. Fames congue et
              condimentum nunc vulputate purus leo. Cum sed ornare semper varius
              a. Aenean commodo amet dui aliquam tortor. Fringilla felis vel ac
              aliquet.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: "5px",
              }}
            >
              2.3 Lorem ipsum dolor sit amet consectetur. Sapien aliquam nec
              varius urna dis arcu velit. Scelerisque urna turpis ac vel at quis
              eget. Eget leo non nec faucibus lobortis tellus. Morbi adipiscing
              aenean volutpat faucibus orci arcu id. Cum aenean eros eget
              faucibus. Lacus nulla suscipit ut ac pharetra. Magna at et
              elementum eros in amet dictum. Elit faucibus duis accumsan dui at
              nec. Semper euismod sed velit non varius mattis sit. Ornare
              viverra congue ultricies risus interdum maecenas amet aliquet nec.
              Ut dignissim consequat morbi in eget pellentesque risus lorem
              quis. Fusce feugiat dolor justo scelerisque erat. Fames congue et
              condimentum nunc vulputate purus leo. Cum sed ornare semper varius
              a. Aenean commodo amet dui aliquam tortor. Fringilla felis vel ac
              aliquet. Quis est dictum dolor volutpat bibendum augue elit sem
              sagittis. Platea et mi congue ultricies habitant. Dapibus non
              risus sapien euismod. Nibh eu nisl odio eleifend in scelerisque
              neque enim auctor. Neque pellentesque ullamcorper nisi dolor. Cras
              vitae mauris cursus sollicitudin eu odio. Quam bibendum ut mattis
              faucibus hac. Eu quis tincidunt scelerisque viverra. Amet sit sed
              vitae proin rhoncus curabitur.
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14.6px",
                color: "#1D374E",
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: "5px",
              }}
            >
              {" "}
              2.4 Lorem ipsum dolor sit amet consectetur. Sapien aliquam nec
              varius urna dis arcu velit. Scelerisque urna turpis ac vel at quis
              eget. Eget leo non nec faucibus lobortis tellus. Morbi adipiscing
              aenean volutpat faucibus orci arcu id. Cum aenean eros eget
              faucibus. Lacus nulla suscipit ut ac pharetra. Magna at et
              elementum eros in amet dictum. Elit faucibus duis accumsan dui at
              nec. Semper euismod sed velit non varius mattis sit. Ornare
              viverra congue ultricies risus interdum maecenas amet aliquet nec.
              Ut dignissim consequat morbi in eget pellentesque risus lorem
              quis. Fusce feugiat dolor justo scelerisque erat. Fames congue et
              condimentum nunc vulputate purus leo. Cum sed ornare semper
              varius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
