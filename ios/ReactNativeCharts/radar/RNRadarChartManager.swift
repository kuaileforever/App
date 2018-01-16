//  Created by xudong wu on 23/02/2017.
//  Copyright wuxudong
//

import UIKit

(RNRadarChartManager)
open class RNRadarChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNRadarChartView(coder: <#NSCoder#>)
    return ins;
  }
  
}
