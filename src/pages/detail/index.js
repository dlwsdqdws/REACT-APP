import React, {PureComponent} from 'react';
import { 
    DetailWrapper,
    Header,
    Content
 } from './style';

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>
                    HaPI
                </Header>
                <Content>
                    <img src = "https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2022/01/Updated-Hompage-Slider-Image_Nanodevice.jpg"/>
                    <p><b>"USC Viterbi researchers create first nano-sized, molecular device potentially capable of sensing and altering the cell’s electric field, ushering in new possibilities for basic research"</b></p>
                    <p>"Bioelectricity, the current that flows between our cells, is fundamental to our ability to think and talk and walk. In addition, there is a growing body of evidence that recording and altering the bioelectric fields of cells and tissue plays a vital role in wound healing and even potentially fighting diseases like cancer and heart disease. Now, for the first time, researchers at the USC Viterbi School of Engineering have created a molecular device that can do both: record and manipulate its surrounding bioelectric field. The triangle-shaped device is made of two small, connected molecules — much smaller than a virus and similar to the diameter of a DNA strand."</p>
                    <p>"It’s a completely new material for “reading and writing” the electric field without damaging nearby cells and tissue. Each of the two molecules, linked by a short chain of carbon atoms, has its own separate function: one molecule acts as a “sensor” or detector that measures the local electric field when triggered by red light; a second molecule, “the modifier,” generates additional electrons when exposed to blue light. Notably, each function is independently controlled by different wavelengths of light."</p>
                    <p>"The work, published in the Journal of Materials Chemistry C, was spearheaded by USC Viterbi professors Andrea Armani and Rehan Kapadia. The lead authors include Yingmu Zhang, a postdoctoral researcher in the Mork Department of Chemical Engineering and Material Science; and Jinghan He, a Ph.D. candidate in the USC Department of Chemistry. Co-authors include Patrick Saris, USC Viterbi postdoctoral researcher; and Hyun Uk Chae and Subrata Das, Ph.D. candidates in the Ming Hsieh Department of Electrical and Computer Engineering. The Armani Lab was responsible for creating the new organic molecule, while the Kapadia Lab played a key role in testing how efficiently the “modifier” was generating electricity when activated by light."</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;