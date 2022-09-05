import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_8}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1805252-4111-43be-85b0-101088064a60"
          }}
          style={styles.ImageBackground_0_9}
        />
        <View style={styles.View_0_11}>
          <Text style={styles.Text_0_11}>My post</Text>
        </View>
      </View>
      <View style={styles.View_0_12}>
        <View style={styles.View_0_13}>
          <Text style={styles.Text_0_13}>Following</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9ba191d-c16c-4769-bbfe-e4c836c48875"
          }}
          style={styles.ImageBackground_0_14}
        />
      </View>
      <View style={styles.View_0_17}>
        <View style={styles.View_0_18}>
          <View style={styles.View_0_19} />
          <View style={styles.View_0_20} />
          <View style={styles.View_0_21} />
          <View style={styles.View_0_22} />
          <View style={styles.View_0_23} />
          <View style={styles.View_0_24} />
          <View style={styles.View_0_25} />
          <View style={styles.View_0_26} />
          <View style={styles.View_0_27} />
          <View style={styles.View_0_28} />
          <View style={styles.View_0_29} />
          <View style={styles.View_0_30} />
          <View style={styles.View_0_31} />
          <View style={styles.View_0_32} />
          <View style={styles.View_0_33} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78e84f9c-03c7-4b2c-8d87-cceac55648c6"
            }}
            style={styles.ImageBackground_0_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69834cda-f092-417a-a5b5-429060070109"
            }}
            style={styles.ImageBackground_0_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5ba9376-d40f-407c-819e-6b3d1fa6b812"
            }}
            style={styles.ImageBackground_0_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/246f3780-bb09-4fa4-bd1b-7878dc079f50"
            }}
            style={styles.ImageBackground_0_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e07d014c-46d6-4b03-b612-d4a04075dc15"
            }}
            style={styles.ImageBackground_0_38}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ff76612-1e88-4568-b50b-726bc8401f16"
            }}
            style={styles.ImageBackground_0_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2342a4f3-11e9-4ef5-867c-2f433433cb97"
            }}
            style={styles.ImageBackground_0_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc1ec6c3-4e63-4b67-acf8-8e9e18765668"
            }}
            style={styles.ImageBackground_0_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27d018f5-2dbd-489e-811f-546aac7ee827"
            }}
            style={styles.ImageBackground_0_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a877136f-d4e6-481e-9e11-f371bc7a3ca3"
            }}
            style={styles.ImageBackground_0_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d97cfb8-8bd6-459a-a606-49087feb930f"
            }}
            style={styles.ImageBackground_0_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/287990be-79c0-424b-b977-867c696434ae"
            }}
            style={styles.ImageBackground_0_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e989d06d-e80f-4875-92a5-5132e55d5bc5"
            }}
            style={styles.ImageBackground_0_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a62f9a-4a47-4deb-a296-2ab7033118b7"
            }}
            style={styles.ImageBackground_0_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8973a438-a631-46cd-b6e3-f1c49e3e2e2e"
            }}
            style={styles.ImageBackground_0_48}
          />
        </View>
      </View>
      <View style={styles.View_0_49}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecb75f52-752b-4acc-a40f-4a6b19d93a2d"
          }}
          style={styles.ImageBackground_I0_49_2_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ae5ca06-83f0-4310-8b10-9adc6d4cecac"
          }}
          style={styles.ImageBackground_I0_49_214_570}
        />
      </View>
      <View style={styles.View_0_50}>
        <Text style={styles.Text_0_50}>Username</Text>
      </View>
      <View style={styles.View_0_51}>
        <Text style={styles.Text_0_51}>email@email.com</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_0_8: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("25%")
  },
  ImageBackground_0_9: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_11: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_12: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("25%")
  },
  View_0_13: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_13: {
    color: "rgba(154, 162, 160, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_0_14: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_17: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_18: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_19: {
    width: wp("65%"),
    height: hp("33%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_0_20: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 241, 214, 1)"
  },
  View_0_21: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(217, 218, 221, 1)"
  },
  View_0_22: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_0_23: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(249, 216, 217, 1)"
  },
  View_0_24: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_0_25: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_0_26: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_0_27: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(252, 241, 214, 1)"
  },
  View_0_28: {
    width: wp("65%"),
    height: hp("33%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(249, 216, 217, 1)"
  },
  View_0_29: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_0_30: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_0_31: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 241, 214, 1)"
  },
  View_0_32: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_0_33: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_0_34: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_0_35: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    resizeMode: "cover"
  },
  ImageBackground_0_36: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    resizeMode: "cover"
  },
  ImageBackground_0_37: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_0_38: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    resizeMode: "cover"
  },
  ImageBackground_0_39: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_0_40: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_0_41: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    resizeMode: "cover"
  },
  ImageBackground_0_42: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_0_43: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    resizeMode: "cover"
  },
  ImageBackground_0_44: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    resizeMode: "cover"
  },
  ImageBackground_0_45: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_0_46: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_0_47: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    resizeMode: "cover"
  },
  ImageBackground_0_48: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    resizeMode: "cover"
  },
  View_0_49: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_49_2_31: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_49_214_570: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_0_50: {
    width: wp("18%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_0_50: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_51: {
    width: wp("24%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_0_51: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
